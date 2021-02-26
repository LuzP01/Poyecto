const { request } = require('express');
const express = require('express');
const router = express.Router();
const Antecedentes= require('../models/Antecedentes');


router.get('/', (req, res) =>{
    res.render('forms/new-form');
});

router.get('/about', (req, res) =>{
    res.render('about');
});

router.post('/forms/new-form', async (req,res)=> {
    const { antecedentes, antecedentesPaciente}= req.body;
    const errors= [];
    if ( !antecedentes || !antecedentesPaciente) {
        errors.push({text: 'por favor agregar los antecentes generales o antecendentes del paciente '});
    }
    if ( !antecedentesPaciente){
        errors.push({text: 'por favor agregar los antecedentes del paciente'});
    }
    if (errors.length > 0){
        res.render('forms/new-form',{
            errors,
            antecedentes,
            antecedentesPaciente
            
        });
    } else {
        const antecedentes1 =  new Antecedentes({antecedentes,antecedentesPaciente});
        await antecedentes1.save();
        console.log(antecedentes);
        console.log(antecedentesPaciente);
        req.flash('success_msg', 'Antecedente Agregado');
        res.redirect('/antecedentes');

    }
    
});
router.get('/antecedentes', async (req, res)=> {
   const antecedent = await Antecedentes.find().sort({date: 'desc'});
   res.render('forms/all-anteceden', { antecedent });
   console.log(antecedent);
});

router.get('/forms/edit/:id',async (req,res) => {
    const ejAntecedente= await Antecedentes.findById(req.params.id);
    res.render('forms/edit-antecedent',{ejAntecedente});
});
router.put('/forms/edit-antecedent/:id', async (req,res) => {
 const {antecedentes, antecedentesPaciente} = req.body;
 await Antecedentes.findByIdAndUpdate(req.params.id,{antecedentes,antecedentesPaciente})
 req.flash('success_msg','antecedente actualizado');
 res.redirect('/antecedentes');
});
router.delete('/forms/delete/:id',async (req,res) => {
    await Antecedentes.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'antecededente borrado');
    res.redirect('/antecedentes');
});
module.exports = router;

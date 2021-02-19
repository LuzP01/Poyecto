const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/signin', (req, res) =>{
    res.render('users/signin');
});
router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/antecedentes',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

router.get('/users/signup', (req, res) =>{
    res.render('users/signup');
});
router.post('/users/signup', async (req,res) => {
    const {nombre,email,numero,password,confirm_password} = req.body;
    let errors = [];
    if(nombre==null){
        errors.push({text: 'su nombre, email o su numero telefonico todavia no han sido ingresados'});
    }
    if(password!=confirm_password){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(password.length < 4){
        errors.push({text: 'La contraseña debe ser mayor a 4 caracteres'});
    }
    if(errors.length>0){
        res.render('users/signup',{errors,nombre,email,numero,password,confirm_password});
    }else{
       const emailUser= await User.findOne({email: email});
       if(emailUser){
           req.flash('error-msg', 'El email ingresado ya se encuentra registrado');
           res.redirect('/users/signup');
       }
       const newUser = new User ({nombre,email,numero,password});
       newUser.password= await newUser.encrypPassword(password);
       await newUser.save();
       req.flash('success_msg', 'Registrado con exito');
       res.redirect('/users/signin');
    }
    
});

module.exports = router;
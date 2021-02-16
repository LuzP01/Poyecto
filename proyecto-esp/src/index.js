const express = require('express');
const path = require('path'); 
const exphbs = require('express-handlebars');

//Inicializacion
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: ,
    layoutsDir: ,
    partialsDir: ,
    extname:
}));
//Middlewares

// Global variables

//Routes

//Static files

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
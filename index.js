const express = require('express');
const path = require('path');


const app = express();
require('./database')


//Configuraciones pe
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares//

app.use(express.urlencoded({extended: false}));

//Routes//
app.use(require('./routes/index'));



//Static Files//
app.use(express.static(path.join(__dirname, 'public')));


// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).render('404');
  });
  
  // Middleware para manejar errores 500
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500');
  });


//Start//

app.listen(app.get('port'), () =>{
    console.log(`Servidor prendido en: http://localhost:${app.get('port')}/ `);
})

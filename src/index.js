const express = require ('express');
const app =express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/employees'));


//start
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
})
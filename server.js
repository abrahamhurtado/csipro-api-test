var express = require('express');

// Aquí mandamos pedir las rutas de la api
var eventsRoute = require('./routes/eventos');

var app = express();

app.disable('x-powered-by');
app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.send('¡Hola, gente!');
});

app.use('/api/v1', eventsRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`El servidor está corriendo en el puerto ${process.env.PORT || 3000} :)`);
})

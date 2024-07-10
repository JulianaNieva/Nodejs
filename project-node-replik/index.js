const express = require('express');
const app = express();
const override = require(`method-override`);
const rutas = require(`./src/route/mainRoutes`);

const port = 8080 || 3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', (__dirname + '/src/views'));

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(override('_metodo'));

app.use((req, res, next) => {
    console.log('Método después de override:', req.method);
    next();
});

app.use('/', rutas);

app.use((req, res, next) => {
    res.status(404).send(`<h1>Pagina no encontrada</h1> <br>
    <p>Mensaje personalizado</p><br>
    <a href="/">Regressar a la pagina principal</a>`)
})

app.listen(port, ()=> console.log(`Servidor funcionando en puerto: ${port}`))





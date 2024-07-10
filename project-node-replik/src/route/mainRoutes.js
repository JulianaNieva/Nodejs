const express = require('express');
const router = express.Router();
const controladores = require('../controllers/mainControllers');
const multer = require ('multer');
const path = require('path');

// multer config here
const storage = multer.diskStorage({
    // Se ejecuta como un metodo dentro de un metodo
    destination: (req, file, cb) => {cb(null, `public/img/productAdded`)},
    // Primero null porque no lleva procesos complejos o mas logica
    filename: (req, file, cb) => {cb(null, "imagen_" + path.extname(file.originalname))}
})

const uploadFile = multer({storage})


// set de controladores aqui
router.get("/shop", controladores.getProduct);

router.post('/shop', uploadFile.single('image'), controladores.crearProducto);

router.delete('/shop', controladores.deleteProduct);

router.get('/actualizar/:num' ,controladores.getUpdate);

router.patch('/actualizar', controladores.update);


module.exports = router;
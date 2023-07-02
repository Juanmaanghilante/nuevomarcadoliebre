const express = require('express');
const router = express.Router();
const productControler = require('../controllers/productcontroller');
const multer = require('multer');
const path = require('path');
const productcontroller = require('../controllers/productcontroller');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/images'))
    },
    filename: function(req, file, cb){
        let imageName = Date.now() + file.originalname;
        cb(null, imageName);
    }
});
const fileUpload= multer({storage:multerDiskStorage})
// ruta al detalle de producto 
router.get('/detalle/:id',productcontroller.detalle);

// ruta para crear producto
router.get('/create',productControler.formularioCrear)
router.post('/create',fileUpload.single('fotoUsuario'),productControler.productoCrear)

// productos editar
// EDIT
router.get('/edit/:id', productControler.productsEdit)
// para editar
router.put("/edit/:id",fileUpload.single("nuevaImagen"), productControler.productEditar)
// para eliminar
router.delete("/edit/:id", productControler.productDelete)
module.exports=router
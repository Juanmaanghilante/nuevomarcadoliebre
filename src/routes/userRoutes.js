const express= require("express")
const router= express.Router()
const userController =require("../controllers/userController")


router.get("/login",userController.login)

router.get("/registrarse",userController.registrarse)
// ruta tipo post para enviar datos al JSON
router.post("/registrar",userController.processRegister)


// ruta para ver el formulario de edicion del usuario
router.get('/editar/:id',userController.editar)
// rutas tipo put actualizan informacion
router.put('/editar/:id',userController.procesoEditar)

// ruta para ver el perfil
router.get('/perfil/:id',userController.perfil)


// ruta para eliminar
router.delete('/eliminar/:id',userController.eliminar)











module.exports=router
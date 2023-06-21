const express= require("express")
const router= express.Router()
const userController =require("../controllers/userController")


router.get("/login",userController.login)

router.get("/registrarse",userController.registrarse)
// ruta tipo post para enviar datos al JSON
router.post("/registrar",userController.processRegister)












module.exports=router
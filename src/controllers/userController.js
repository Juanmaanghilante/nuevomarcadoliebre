

const fs=require('fs')
const path= require('path')
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/user.json')) )
const userController={

 login: (_req,res) =>{
    return res.render ("login")
    
     },

registrarse: (_req,res)=>{
    return res.render("registrar")

},
processRegister:(req,res)=>{
const user={
        "id":1,
        "name":"pedrito",
        "username":"nombreusuario",
        "fechaDeNacimiento":"16/10/2000",
        "email":"curne_juan@hotmail.com",
        "domicilio":"calle falsa 123",
        "tipoDePerfil":"vendedor",
        "intereses":"on",
        "image":"default-image.png",
        "password":"1234",
        // res.redirect("/")
    }
console.log(req.body);
}

}


module.exports=userController
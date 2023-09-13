

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
// proceso para registrarse
processRegister:(req,res)=>{
const user={
        "id":datos.length+1,
        "name":req.body['nombreCompleto'],
        "username":req.body.usuario,
        "fechaDeNacimiento":req.body.fechaNacimiento,
        "email":req.body.emailUsuario,
        "domicilio":req.body.domicilio,
        "tipoDePerfil":req.body.perfilUsuario,
        "intereses":req.body.intereses,
        "image":req.body.fotoUsuario,
        "password":req.body.password,
      
    }
    fs.writeFileSync(path.resolve(__dirname,'../database/user.json'),JSON.stringify([...datos,user],null,2))
console.log(req.body);
res.redirect("/")
},
editar:(req,res)=>{
  const usuarioEditar=datos.find(usuario => usuario.id == req.params.id )

  if(usuarioEditar.password) usuarioEditar.password=null
  
  res.render('userEdit',{usuarioEditar:usuarioEditar})

},
procesoEditar: (req,res)=>{
  const usuarioEditar=datos.find(usuario => usuario.id == req.params.id )
 console.log(usuarioEditar);
usuarioEditar.name=req.body.nombreCompleto
usuarioEditar.username=req.body.usuario
usuarioEditar.fechaDeNacimiento=req.body.fechaNacimiento
usuarioEditar.email=req.body.emailUsuario
usuarioEditar.domicilio=req.body.domicilio
usuarioEditar.tipoDePerfil=req.body.perfilUsuario
usuarioEditar.intereses=req.body.intereses
usuarioEditar.password=req.body.password
  fs.writeFileSync(path.resolve(__dirname,'../database/user.json'),JSON.stringify(datos,null,2))
  res.redirect('/user/editar/'+ req.params.id)
  
}
,

// proceso para ver el registro de usuario
perfil:(req,res)=>{
  const usuario=datos.find((row)=>row.id==req.params.id)
  console.log(usuario); 
  return res.render('perfil',{usuario:usuario})
},
eliminar:(req,res)=>{

  
  

},

}


module.exports=userController
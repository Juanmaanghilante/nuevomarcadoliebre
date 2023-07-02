

const express=require('express')
const app= express()
const path= require('path')
const mainRoutes= require('./routes/mainRoutes')
const userRoutes= require('./routes/userRoutes')
const methodOverride=require('method-override')     

// requiero rutas de productos
const productRoutes=require('./routes/productRoutes')

app.use(express.static('public'))

app.use(express.urlencoded({extended:false}));
app.use(express.json())
// para sobreescribir el metodo
app.use(methodOverride('_method'))

app.set("views",path.join(__dirname,"../views"))
app.set ("view engine","ejs")




// levanto el servidor
app.listen(3000,()=>{
    console.log('servidor corriendo en el puerto 3000');
})
app.use(mainRoutes)
app.use('/user', userRoutes)


// rutas de productos
// detalle
app.use('/products',productRoutes)

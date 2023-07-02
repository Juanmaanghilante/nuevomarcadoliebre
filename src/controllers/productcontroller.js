const fs=require('fs')
const path= require('path')
const datosProducto = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/product.json')) )




module.exports={
    detalle: (req, res) => {
        const productoEncontrado = datosProducto.find(row => row.id ==req.params.id)
       console.log(productoEncontrado);
        return res.render('detalleProducto', { producto: productoEncontrado });
      },
      formularioCrear: (req,res) =>{

       return res.render('formCrearProducto')
      },
      productoCrear:(req,res)=>{
      const nuevoProducto={
      "id":datosProducto.length +1,
      "name":req.body.name,
      "price":req.body.price,
      "discount":req.body.discount,
      "category":req.body.category,
      "description":req.body.description,
      "image":req.file.filename 
      } 
      datosProducto.push(nuevoProducto)
      fs.writeFileSync(path.resolve(__dirname,'../database/product.json'), JSON.stringify(datosProducto, null, 2), 'utf-8');
    
      return res.redirect("/products/create")
      },
      // renderiza la vista al formulario productEdit
      productsEdit: (req,res) =>{
        const productoEditar= datosProducto.find(row => row.id ==   req.params.id)
        return res.render('productEdit',{producto:productoEditar})
      }
    // metodo para editar el producto a travez de put
    ,
    productEditar:(req,res) =>{
        const productoEditar= datosProducto.find(row => row.id == req.params.id)
       
        productoEditar.name = req.body.name
        productoEditar.description = req.body.description
        productoEditar.price = req.body.price
        productoEditar.category = req.body.category
        productoEditar.image=req.file == undefined?productoEditar.image:req.file.filename
        fs.writeFileSync(path.resolve(__dirname, '../database/product.json'), JSON.stringify(datosProducto, null, 2))
console.log(productoEditar);
        return res.redirect('/')


    },
  productDelete:(req,res)=>{
    const productoEditar= datosProducto.find(row => row.id == req.params.id)
    productoEditar.borrado=true
    
    fs.writeFileSync(path.resolve(__dirname, '../database/product.json'), JSON.stringify(datosProducto, null, 2))
console.log(productoEditar);
    return res.redirect('/')
  },
  
  }

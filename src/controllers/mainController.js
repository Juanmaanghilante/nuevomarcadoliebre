

const fs=require('fs')
const path= require('path')
const datos= JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/product.json')) )

const mainController={
   
//    ruta al  home
    index: (req,res) =>{

const visitado= datos.filter((row) =>row.category=='visited')
const oferta= datos.filter((row) =>row.category=='in-sale')
        return res.render ("home",{visitado:visitado,oferta:oferta})

 }
 ,




}


module.exports=mainController
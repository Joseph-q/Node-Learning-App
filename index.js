const  Sevice  = require("./server");
const Routes=require("./routes");
const Handle = require("./handler");

var handle ={};
    handle["/"]=Handle.inicio;
    handle["/inicio"]=Handle.inicio;
    handle["/subir"]=Handle.subir;
    handle["/mostrar"]=Handle.mostrar;


Sevice.start(Routes.routes,handle)


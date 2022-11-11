var mongoose=require("mongoose");
var URI="mongodb://localhost/mekanbul";
mongoose.connect(URI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı!",function(){
        process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
console.log(URI+"adresindeki veritabanına bağlanıldı !\n");
});
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı kesildi !\n");
});  
mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası !\n");
});
  
require("./mekansema");
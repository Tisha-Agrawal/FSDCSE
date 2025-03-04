const fs=require('fs');
function writeAsync(){

   try{
    fs.writeFile('data.pdf',"data is written using fs module",(err)=>{
        if(err){
            console.log("error during writing the data.");
        }
        else{
            console.log("data is written successfully");
        }
    })
   }
   catch(e){
     console.log(e);
   }
}
function readASync(){
    try{
        fs.readFile('data.pdf',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log("Error while reading file", err);
            }
            else{
                console.log(data);
            }
        })
    }
    catch(e){
        console.log(e);
    }
}

const obj={writeAsync,readASync};
module.exports=obj;


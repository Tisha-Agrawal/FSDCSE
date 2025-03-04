const fs= require("fs");

function writeData(){
    try{
        fs.writeFileSync('data.txt',"Welcome");
        console.log("Data is writen successfully");
    }
    catch(err){
        console.log("Error Due to writing."+err);

    }

}


function readData(){
    try{
        const frd=fs.readFileSync('data.txt',{encoding:'utf-8'});
        return frd;
        //console.log(frd);
    }
    catch(err){
        console.log("Error during reading. "+err);
    }

}

function appendData(){
    try{
        fs.appendFileSync('data.txt',"Hi,data is appended using fs module");
        console.log("data is appended successfully");

    }
    catch(err){
        console.log("Data is appended"+err);
    }

}

function datadelete(){
    try{
        fs.unlinkSync('data.txt');
        console.log("data deleted");
    }
    catch(err){
        console.log("data is deleted successfully"+err);
    }
}

const obj ={
    readData,
    writeData,
    appendData,
    datadelete
}
module.exports=obj;
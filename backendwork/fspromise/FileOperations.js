const fs=require("fs").promises;
const pd=fs.writeFile("student.pdf","cseB students data");
pd.then(()=>{
    console.log("data is written successfully")

})
.catch((err)=>{
    console.log("error"+err);
})
.finally(()=>{
    console.log("resources closed");
})
async function readfilepromise(){
    try{
        const data= await fs.readFile('student.pdf',{encoding:'utf-8'} )
        console.log(data);
    }
    catch(e){
        console.log("error while reading the data:"+e);
    }  
}
readfilepromise();
   
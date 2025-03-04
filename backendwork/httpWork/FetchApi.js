const http = require('http');
const PORT = 3002;

const server = http.createServer(async(req, res) => {
    res.setHeader('Content-type', 'text/html')
   const data= await fetch('https://fakestoreapi.com/products');
   const mydata=await data.json();

   console.log(mydata[0].title);
   const title=mydata[0].title;
   const img=mydata[0].image;
   const price=mydata[0].price;
   const desc=mydata[0].description;
   const category=mydata[0].category;


   const htmltemplate=`<h2 style='background-color: brown; color: white; text-align:center'>Welcome to Online Store
   </h2>
   <br>
   <div>
   <h3>${title}</h3>
   </div>
   <image src=${img} height=200 width=200 alt="bag image"/>
   <div style='width:25%' >
   <h3 style='padding-left:50px'>$ ${price}</h3>
   <h4>${desc}</h4>
   <h3>${category}</h3>
   </div>

   `
   res.end(htmltemplate);
});
        
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

let http = require('http');
let url = require('url');
let fs = require('fs');
http.createServer( (req, res) => {
   
    if(req.url == '/') {

        res.end("This is home page"); }
      else if (req.url =='/about') {

       res.end("this is about page"); }
    else if(req.url =='/Contact') {

         res.end("this is contact us page")
     } else if (req.url =='/userapi') {
        fs.readFile('dummyApi.js', 'utf-8', (er,data)=> {
            console.log("file to read:",data);
             let objDta = JSON.parse(data);
             res.end(objDta[0].id);
            //res.end(data);
        });
       
     }

     else {
         res.writeHead(404, {"content-type": "text/html"})
         res.end('<h1> Error 404</h1>');
     }
    }).listen(3000, "127.0.0.1", () => {  
    console.log("listening to the port no 8080!");
});     
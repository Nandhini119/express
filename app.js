let express = require('express'),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended:false});
    
const app = express();
    var result_obj={};
app.use(express.static('./public/html'));

// app.use(function (request,response) {
//   console.log("First Method");
//   response.send("Hello !!!!!!!");
// });

app.post('/Even',parseUrlencoded,function (request,response) {
    //window.alert("inside even"); // YOU CANT USE WINDOW OBJECT IN SERVER SIDE CODE - USE CONSOLE.LOG
    console.log("Inside Even");
  var number = request.body;
  var data = number.Data;
  var result;
  for(var counter=0;counter<data.length;counter++){
    var num=parseInt(data[counter]);
    if(num%2===0)
    {
      result = num+",";
    }
  }
  result_obj.operation = "Even";
  result_obj.result = result;
  response.status(200).json(result_obj);

//  response.send("Hello Even");
});
app.post('/Odd',parseUrlencoded,function (request,response) {
  var number = request.body;
  var data = number.Data;
  var result;
  for(var counter=0;counter<data.length;counter++){
    var num=parseInt(data[counter]);
    if(num%2!=0)
    {
      result = num+",";
    }
  }
  result_obj.operation = "Odd";
  result_obj.result = result;
  response.status(200).json(result_obj);

//  response.send("Hello Even");
});
app.listen(3000,function () {
  console.log("listen on port 3000");
});

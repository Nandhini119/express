
$.post('/',myresult);
$('form').on("click",function (event) {
  event.preventDefault();
  var action_button=event.target.name;
  
  if(action_button === 'Even'
  ||action_button === 'Odd'
  || action_button === 'Replace'
  || action_button === 'Remove' )
  {
       var form=$(this);
       var form_data=form.serialize();
       
       $.ajax({
         type:'post',
         url:'/'+action_button,data:form_data}).done(function (data) {
             window.alert("hi");
        myresult(data);
        form.trigger('reset');
       })
     
     }
     
});

function myresult(data) {
    var parentDiv=document.getElementsByClassName('result');
   var newlabel = document.createElement("Label");
   newlabel.innerHTML = data.operation+" is "+data.result;
   window.alert(data.result.toString());
   document.body.appendChild(newlabel);

 }

var i = 1;
$(document).ready(function(){
    $("#btn-addopt").click(function(){
        i++;
        $("#options").append(" <input name='options"+i+"' placeholder='option'></input><br /><br />");
    });
   
});



// Как только страничка загрузилась 
  window.onload = function () { 
    // проверяем поддерживает ли браузер FormData 
    if(!window.FormData) {
      alert("The browser does not support uploading files to this site.");
    }
  }


$(document).ready(function(){
  // =validation
  var errorTxt = 'Error!';
  $("#sendform2").validate({
    submitHandler: function(form){
      var form = document.forms.sendform2,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "form2.php");
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
            $("#sendform2").html('<p class="thank" style="color: #2bc9a8">Done!<p>');
          }
        }
      };
      xhr.send(formData);
    }
  }); 
})


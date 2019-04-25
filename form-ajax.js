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
  $("#sendform").validate({
    submitHandler: function(form){
      var form = document.forms.sendform,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "form.php");
  xhr.send(formData);

   button = $(".label").html('<span class="thank">Upload...<span>') &&  $(".click").html('<span class="thank" style="display: none;"> Upload more?<span>') &&  $(".icon-up").css('display', 'none');   
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
           button = $(".label").html('<span class="thank">Done!<span>') && $(".click").html('<span class="thank"> Upload more?<span>');;
           
            
          }
        }
      };
    
    }
  }); 
})


var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();


var $form = $('.box');

if (isAdvancedUpload) {
  $form.addClass('has-advanced-upload');
  var droppedFiles = false;
 
  $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $form.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $form.removeClass('is-dragover');
  })
  .on('drop', function(e) {
    droppedFiles = e.originalEvent.dataTransfer.files;
   $('.box__button').addClass('active');
  })

}



document.getElementById("file").onchange = function() {
  //  $form.trigger('submit');
  $('.box').find(':submit').click();
     
};


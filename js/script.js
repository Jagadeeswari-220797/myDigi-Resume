```javascript
// jQuery Ready Function
$(document).ready(function(){

  // Button Click Event
  $("button").click(function(){
    console.log("Button clicked!");
  });

  // Show alert on form submit
  $("form").submit(function(e){
    e.preventDefault();
    alert("Form submitted successfully!");
  });

  // Tooltip Enable
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Popover Enable
  $('[data-bs-toggle="popover"]').popover();

});


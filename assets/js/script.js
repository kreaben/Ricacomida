var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

$('#Enviar').click(function (){
    alert("El correo fue enviado correctamente")
});

$('#Preparacion').dblclick(function(){
     $(this).css('color', 'red');
    
});

$('#Ingredientes').dblclick(function(){
    $(this).css('color', 'red');
   
});
  
$('.card-text').click(function(){
    $(".descripcion").toggle();
  });
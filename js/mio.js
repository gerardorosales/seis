$(window).ready(function() {
    var wi = $(window).width();  
    $("#inicial").text(wi + 'px.');
 
    $(window).resize(function() {
        var wi = $(window).width();
 
        if (wi <= 480){
            $("#t").text('El ancho actual es menor o igual a 480px. Ancho actual: ' + wi + 'px.');
            }
        else {
            $("#t").text('El ancho es mayor a 480px. Ancho actual: ' + wi + 'px.');
            }
    });            
})
$(document).ready(function()
{

    $('#botonJson').click(function(){
        console.log('Entro Json');
           $.post('getregistro.php',{},function(data)
           {
               console.log(data);
               $('#nombre').val(data.nombre);
               $('#apellidos').val(data.apellidos);
               $('#telefono').val(data.telefono);
               $('#correo').val(data.correo);
           }, 'json');
       
       }
       );

});



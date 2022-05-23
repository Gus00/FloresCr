$(document).ready(function()
{
   /* $('#botonPromesa').click(function(){
    new Promise(function(resolve,reject){
        var solicitud = new XMLHttpRequest();
        solicitud.onreadystatechange = function(){
            if(solicitud.readyState ==4 && solicitud.status==200){

          resolve(solicitud.responseText);  
        }};
        solicitud.open("GET","getHeader.txt", true);
        solicitud.send();
    }).then( value => document.getElementById("enca").innerHTML = value);

    });  */

    $('#botonPromesa').click(function(){
        let promesa = new Promise(function(resolve,reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function(){
                if(solicitud.readyState == 4 && solicitud.status == 200){
                    resolve(solicitud.responseText);
            }};
            solicitud.open("GET","getHeader.txt", true);
            solicitud.send();
        });
        promesa.then( value => document.getElementById("enca").innerHTML = value);

    });


    $('#botonJsonFetch').click(function(){
        let promesa = fetch('getregistro.php');

        promesa.then(respuesta => respuesta.json())
        .then(function(dato) {refrescar(dato) });

    });
    





    $("#botonModalSweet").click(function(){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
        });  



        function refrescar(objeto){
            $('#nombre').val(objeto.nombre);
            $('#apellidoMaterno').val(objeto.apellidoMaterno);
            $('#apellidoPaterno').val(objeto.apellidoPaterno);
            $('#telefono').val(objeto.telefono);
            $('#correo').val(objeto.correo);
            $('#boleto').val(objeto.boleto);
            $('#asiento').val(objeto.asiento);

        }
});



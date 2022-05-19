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
});



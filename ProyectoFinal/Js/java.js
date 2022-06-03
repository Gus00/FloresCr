$(document).ready(function()
{
  

        function refrescar(objeto){
            $('#id').val(objeto.id_Comprador);
            $('#nombre').val(objeto.nombre);
            $('#apellidoMaterno').val(objeto.apellidoMaterno);
            $('#apellidoPaterno').val(objeto.apellidoPaterno);
            $('#telefono').val(objeto.numeroTelefono);
            $('#correo').val(objeto.correoElectronico);
            $('#boleto').val(objeto.TipoBoleto);
            $('#asiento').val(objeto.asientoEspecial);
        }

        
        $('#botonBuscar').click(function() {
         /#   let varid = prompt('Id a consultar'); */
        let varid= $('#ModalID').modal('show')
           
         
            $.post('Php/consulta.php',{par1:varid},function(data){
                refrescar(data);
            },'json');
        });

        $('#botonModificar').click(function() {     
            let varid = document.getElementById("id").value;
            let varnombre = document.getElementById("nombre").value;
            let varapMaterno = document.getElementById("apellidoMaterno").value;
            let varapPaterno = document.getElementById("apellidoPaterno").value;
            let vartelefono = document.getElementById("telefono").value;
            let varcorreo = document.getElementById("correo").value;
            let varboleto = document.getElementById("boleto").value;
            let varasiento = document.getElementById("asiento").value;       
            $.post('Php/modificar.php',{par1:varid,par2:varnombre,par3:varapMaterno,par4:varapPaterno,par5:vartelefono,par6:varcorreo,par7:varboleto,par8:varasiento},function(data){
               var ver = data; 
                refrescar(data);  
                console.log(ver);
                if (ver==true) {
                    $('#ModalExito').modal('show')
                } else {
                    $('#ModalError').modal('show')
                }; 
                },'json');
                
        });


        $('#botonEliminar').click(function() {
            let varid = document.getElementById("id").value;
        
            $.post('Php/eliminar.php',{par1:varid},function(data){
                var ver = data; 
                refrescar(data);  
                console.log(ver);
                if (ver==true) {
                    $('#ModalExito').modal('show')
                } else {
                    $('#ModalError').modal('show')
                }; 
            },'json');
            
        });

        $('#botonRegistrar').click(function() {     
            let varid = document.getElementById("id").value;
            let varnombre = document.getElementById("nombre").value;
            let varapMaterno = document.getElementById("apellidoMaterno").value;
            let varapPaterno = document.getElementById("apellidoPaterno").value;
            let vartelefono = document.getElementById("telefono").value;
            let varcorreo = document.getElementById("correo").value;
            let varboleto = document.getElementById("boleto").value;
            let varasiento = document.getElementById("asiento").value;       
            $.post('Php/registrar.php',{par1:varid,par2:varnombre,par3:varapMaterno,par4:varapPaterno,par5:vartelefono,par6:varcorreo,par7:varboleto,par8:varasiento},function(data){
             refrescar(data);    
                $('#ModalExito').modal('show')
            },'json');

        });
});



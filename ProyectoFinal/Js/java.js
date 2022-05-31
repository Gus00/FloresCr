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
            let varid = prompt('Id a consultar');
        
            $.post('Php/consulta.php',{par1:varid},function(data){
                refrescar(data);
            },'json');
        });

        $('#botonModificar').click(function() {     
            let varid = document.getElementById("id").value;            
            $.post('Php/modificar.php',{par1:varid},function(data){
                refrescar(data);    
            },'json');

        });

        $('#botonEliminar').click(function() {
            let varid = document.getElementById("id").value;
        
            $.post('Php/eliminar.php',{par1:varid},function(data){
                refrescar(data);
            },'json');
        });
});



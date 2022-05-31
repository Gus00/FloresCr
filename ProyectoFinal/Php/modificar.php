<?php

$paridCte=$_POST['par1'];

$hostname='localhost';
$database='L19100180';
$username='root';
$password='2701';
$port='3306';



$nombre=$_POST['#nombre'].val();
$apellidoMaterno=$_POST['#apellidoMaterno'].val();
$apellidoPaterno=$_POST['#apellidoPaterno'].val();
$telefono=$_POST['#telefono'].val();
$correo=$_POST['#correo'].val();
$boleto=$_POST['#boleto'].val();
$asiento=$_POST['#asiento'].val();

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);

} catch (PDOException $e) {
   echo "Error de conexion a la base de datos;";
   echo $e->getMessage();
   exit();
}


try {
    $consultaSql = "UPDATE comprador set nombre=".$nombre, "apellidoMaterno=".$apellidoMaterno, "apellidoPaterno=".$apellidoPaterno, 
    "numeroTelefono=".$telefono, "correoElectronico=".$correo, "TipoBoleto=".$boleto, "asientoEspecial=".$asiento,"where id_Comprador=".$paridCte;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
    echo "exito";

} catch (PDOException $e) {
echo "Error de consulta a la base de datos";
echo $e->getMessage();
}
echo json_encode($resultado);
?>
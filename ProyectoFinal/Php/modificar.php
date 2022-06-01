<?php



$hostname='localhost';
$database='L19100180';
$username='root';
$password='2701';
$port='3306';

$paridCte=$_POST['par1'];
$nombre=$_POST['par2'];
$apellidoMaterno=$_POST['par3'];
$apellidoPaterno=$_POST['par4'];
$telefono=$_POST['par5'];
$correo=$_POST['par6'];
$boleto=$_POST['par7'];
$asiento=$_POST['par8'];




try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);

} catch (PDOException $e) {
   echo "Error de conexion a la base de datos;";
   echo $e->getMessage();
   exit();
}


try {
    
    $consultaSql = "UPDATE comprador set nombre= ".$nombre.
                    ",apellidoMaterno=".$apellidoMaterno.
                    ",apellidoPaterno=".$apellidoPaterno.
                    ",numeroTelefono=".$telefono.
                    ",correoElectronico=".$correo.
                    ",TipoBoleto=".$boleto.
                    ",asientoEspecial=".$asiento.
                    "where id_Comprador=".$paridCte.";";

    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
    

} catch (PDOException $e) {
echo "Error de consulta a la base de datos";
echo $e->getMessage();
}

echo json_encode($resultado);
?>
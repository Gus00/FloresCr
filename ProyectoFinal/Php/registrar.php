<?php



$hostname='localhost';
$database='L19100180';
$username='root';
$password='2701';
$port='3306';


$nombre=$_POST['par2'];
$apellidoMaterno=$_POST['par3'];
$apellidoPaterno=$_POST['par4'];
$telefono=$_POST['par5'];
$correo=$_POST['par6'];
$boleto=$_POST['par7'];
$asiento=$_POST['par8'];

$operacion;

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);

} catch (PDOException $e) {
   echo "Error de conexion a la base de datos;";
   echo $e->getMessage();
   exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try {
    if ($nombre != null) {
        $consultaSql = " insert into comprador values (null,'".$nombre.
        " ',' ".$apellidoMaterno.
        "','".$apellidoPaterno.
        "','".$telefono.
        "','".$correo.
        "','".$boleto.
        "','".$asiento."');";
        $consulta = $con -> prepare($consultaSql);
        $consulta -> execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
        $operacion=true;
    } else {
        $operacion=false;
    }
    
   

} catch (PDOException $e) {
echo "Error de consulta a la base de datos";
echo $e->getMessage();

}
echo json_encode( $operacion);
?>
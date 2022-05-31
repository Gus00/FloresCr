<?php



$hostname='localhost';
$database='L19100180';
$username='root';
$password='2701';
$port='3306';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);

} catch (PDOException $e) {
   echo "Error de conexion a la base de datos;";
   echo $e->getMessage();
   exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try {
    $consultaSql = "insert into comprador values";
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
<?php
$registro['nombre'] = 'Jose'
$registro['apellidos'] = 'Madero'
$registro['telefono'] = '8674641445'
$registro['correo'] = 'correo@hotmail.com'

$registroJson = json_encode($registro);
echo $registroJson;
?>
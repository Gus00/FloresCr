<?php
$registro['nombre'] = 'Jose';
$registro['apellidos'] = 'Madero';
$registro['telefono'] = '8674641445';
$registro['correo'] = 'correo@hotmail.com';
$registro['boleto'] = 'Normal';
$registro['asiento'] = 'No';

$registroJson = json_encode($registro);
echo $registroJson;
?>
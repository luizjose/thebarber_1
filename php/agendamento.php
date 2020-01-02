<?php
header("Access-Control-Allow-Origin: *");
header("CoAccess-Control-Allow-Methods: GET,HEAD, POST, PUT, DELETE, CONNECT,  OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/x-www-form-urlencoded");
header("Content-Type: application/json; charset=UTF-8");
    $conn = new mysqli("localhost", "root", "",  "luiz");
      
    $data = file_get_contents("php://input");
    if (isset($data)) {
$objData = json_decode($data);       
    $nome = $objData->nome;
    $telef = $objData->telefone;
    $apelido = $objData->apelido;
    $datacad = $objData->data;
    $horacad = $objData->hora;
       }
    //  data.data= '2019-09-03', horario.horarios = '11:00:00';
       
 $sql =  "INSERT INTO agendamento(id, nome, telefone, apelido, data, hora) VALUES ('','$nome', '$telef', '$apelido', '$datacad', '$horacad')";
 if($conn->query($sql) == TRUE) {

    $response= ["sucesso"];
    
} 
$sql_update = "UPDATE data SET data.status='f' WHERE data.data='$datacad' AND data.horarios='$horacad   '";
if($conn->query($sql_update) == TRUE) {
    $response =["sucesso"];
}
$sql_delete = "DELETE FROM `agendamento` WHERE `telefone` = 0";
if($conn->query($sql_delete) == TRUE) {
     $response =["sucesso"];
}
              echo json_encode($response);
?>
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
    $celular = $objData->celular;
    $email = $objData->email;
    $senha = $objData->senha;
       }
       /*$nome = stripslashes($nome);
       $celular = stripslashes($celular);
       $email = stripslashes($email);
       $senha = stripslashes($senha);*/

                $sql =  "INSERT INTO usuario (id, nome, celular, email, senha, status, nivel) VALUES ('','$nome', '$celular', '$email', '$senha', 'ativo', '1')";
               if($conn->query($sql) == TRUE) {
                   $response= "sucesso negoo";
               } else{
                   $response="num deu diou". $sql."<br>" . $db->error;
               }
               $sql_delete = "DELETE FROM `usuario` WHERE `usuario`.`celular` = 0";
               if($conn->query($sql_delete) == TRUE) {
                    $resp ="sucesso";
               }
               echo json_encode($response);
?>
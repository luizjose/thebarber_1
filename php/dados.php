<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("CoAccess-Control-Allow-Methods: GET,HEAD, POST, PUT, DELETE, CONNECT, OBJECT,  OPTIONS");
header("Content-Type: application/x-www-form-urlencoded");
header("Content-Type: application/json; charset=UTF-8");
try {
	$con = new mysqli("localhost", "root", "",  "luiz");

	$data = file_get_contents("php://input");
	if (isset($data)) {
	$datacad = $data;
	}
	$sql= "SELECT * FROM data WHERE data.status='d'  and data.data='$datacad'";
//$sql= "SELECT data.data, data.status, horario.horarios FROM `data` INNER JOIN horario ON (horario.id_hora = data.id_hora) WHERE data.status='d'  and data.data='$datacad'";
	//$sql->execute();
	$result = $con->query($sql);

		while($rs= $result->fetch_array()){
		
			$out []=$rs;
			
}

//echo $out;
		echo json_encode($out);
} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};
?>
<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("CoAccess-Control-Allow-Methods: GET,HEAD, POST, PUT, DELETE, CONNECT, OBJECT,  OPTIONS");
header("Content-Type: application/x-www-form-urlencoded");
header("Content-Type: application/json; charset=UTF-8");
$con = new mysqli("localhost", "ljcdevco_ljcdevco", "ljose2405",  "ljcdevco_luiz");
      


	$data = file_get_contents("php://input");
    if (isset($data)) {
$objData = json_decode($data);       
    $datacad = $objData->datacad;
        
    }
    $sql= "  SELECT * FROM agendamento WHERE  data='$datacad'";

	$result = $con->query($sql);

		while($rs= $result->fetch_array()){
			$out []=$rs;		
}
//echo $out;
		echo json_encode($out);

?>
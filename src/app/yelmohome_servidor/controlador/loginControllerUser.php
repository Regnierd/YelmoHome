<?php
    namespace Yelmohome_servidor\modelo;
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    use Yelmohome_servidor\modelo\ModelUser;
    require_once("../modelo/ModelUser.php");

    $json = file_get_contents('php://input');
    $datos = json_decode($json);
    
    class Result {}
    $response = new Result();

    $result = ModelUser::searchUser($datos->name_user, $datos->password);

    if($result == 0){
        $response->resultado = "NO";
        $response->menssage = "El usuario no está registrado o los valores introducidos no son los correctos";  
        echo json_encode($response);
    }else{
        $resultJson = json_encode($result);
        echo $resultJson;
    }
    
    header('Content-Type: application/json');
    
?>
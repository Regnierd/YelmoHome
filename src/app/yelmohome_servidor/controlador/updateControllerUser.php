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

    $result = ModelUser::update((int)$datos->id_user, $datos->name_user, $datos->password, $datos->email, $datos->fileName);

    $userUpdated = ModelUser::showUser((int)$datos->id_user);
    
    if($userUpdated != null){
        $resultJson = json_encode($userUpdated);
        echo $resultJson;
    }
    
    

    //$response->resultado = "OK";
    //$response->menssage = "Actualizado correctamente";

    header('Content-Type: application/json');
    //echo json_encode($response);

?>
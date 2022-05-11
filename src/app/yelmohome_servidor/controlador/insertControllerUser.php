<?php
    namespace Yelmohome_servidor\modelo;
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    use Yelmohome_servidor\modelo\ModelUser;
    require_once("../modelo/ModelUser.php");

    $json = file_get_contents('php://input');
    $datos = json_decode($json);
    $passEncrypted = password_hash($datos->password, PASSWORD_DEFAULT);
    class Result {}
    $response = new Result();
    
    $userExist = ModelUser::searchUserEmail($datos->email);

    if($userExist["email"] != null){
        $response->resultado = "NO";
        $response->menssage = "Ese correo ya esta registrado. Pruebe a iniciar sesión.";
    }else{
        $result = ModelUser::insert($datos->name_user, $passEncrypted, $datos->email, $datos->fileName);
        $response->resultado = "OK";
        $response->menssage = "Registrado correctamente";
    }

    header('Content-Type: application/json');
    echo json_encode($response);

?>
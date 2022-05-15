<?php
    namespace Yelmohome_servidor\modelo;
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    use Yelmohome_servidor\modelo\ModelUser;
    require_once("../modelo/ModelUser.php");

    //Traemos los datos del cliente
    $json = file_get_contents('php://input');
    //Transformamos el json del cliente a un array asociativo
    $datos = json_decode($json);
    
    //Clase dedicada para enviar un mensaje al cliente
    class Result {}
    $response = new Result();

    //Llamamos a la funcion searchUser para saber si ya existe el usuario o no. 
    //Lo buscamos por su nombre y contraseña
    $result = ModelUser::searchUser($datos->name_user, $datos->password);

    //Si no existe enviará un mensaje en cuestión
    if($result == 0){
        $response->resultado = "NO";
        $response->menssage = "El usuario no está registrado o los valores introducidos no son los correctos";  
        echo json_encode($response);
    //Si existe enviará el usuario buscado.
    }else{
        $resultJson = json_encode($result);
        echo $resultJson;
    }
    
    header('Content-Type: application/json');
    
?>
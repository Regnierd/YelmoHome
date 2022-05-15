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

    //Llamamos a la funcion update para actualizar el usuario en la bd
    $result = ModelUser::update((int)$datos->id_user, $datos->name_user, $datos->password, $datos->email);

    //Obtenemos el usuario actualizado
    $userUpdated = ModelUser::showUser((int)$datos->id_user);
    
    //Si existe el usuario, enviará el usuario actualizado al cliente
    if($userUpdated != null){
        $resultJson = json_encode($userUpdated);
        echo $resultJson;
    }

    header('Content-Type: application/json');

?>
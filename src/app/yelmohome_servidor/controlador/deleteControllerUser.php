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

    //Llamamos a la funcion delete la clase ModelUser para borrar el usuario por su id
    $result = ModelUser::delete($datos->id_user);

    //Clase dedicada para enviar un mensaje al cliente
    class Result {}
    $response = new Result();

    $response->resultado = "OK";
    $response->menssage = "Cuenta eliminada correctamente";
    
    header('Content-Type: application/json');
    //Enviamos el mensaje al cliente.
    echo json_encode($response);

?>
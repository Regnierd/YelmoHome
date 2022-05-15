<?php

    namespace Yelmohome_servidor\modelo;
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    use Yelmohome_servidor\modelo\ModelFilm;
    require_once("../modelo/ModelFilm.php");

    //Traemos los datos del cliente
    $json = file_get_contents('php://input');
    //Transformamos el json del cliente a un array asociativo
    $datos = json_decode($json);

    //Llamamos a la funcion delete la clase ModelFilm para borrar la pelicula por su id
    $result = ModelFilm::delete($datos->id_film);

    //Clase dedicada para enviar un mensaje al cliente
    class Result {}
    $response = new Result();

    $response->resultado = "OK";
    $response->menssage = "Pelicula eliminada correctamente";
    
    header('Content-Type: application/json');
    //Enviamos el mensaje al cliente.
    echo json_encode($response);

?>
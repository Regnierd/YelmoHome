<?php

    namespace Yelmohome_servidor\modelo;

    use Yelmohome_servidor\modelo\ModelFilm;
    require_once("../modelo/ModelFilm.php");

    //Traemos los datos del cliente
    $json = file_get_contents('php://input');
    //Transformamos el json del cliente a un array asociativo
    $datos = json_decode($json);

    //Clase dedicada para enviar un mensaje al cliente
    class Result {}
    $response = new Result();

    //Llamamos a la funcion update para actualizar la pelicula en la bd
    $result = ModelFilm::update((int)$datos->id_film, $datos->title, $datos->author, $datos->description, (int)$datos->rating, $datos->img,$datos->premiere, $datos->video);

    //Obtenemos la pelicula actualizada anteriormente
    $filmUpdate = ModelFilm::showFilm((int)$datos->id_film);

    //Si existe la pelicula enviará la pelicula actualizada al cliente
    if($filmUpdate != null){
        $resulJson = json_encode($filmUpdate);
        echo $resulJson;
    }

?>
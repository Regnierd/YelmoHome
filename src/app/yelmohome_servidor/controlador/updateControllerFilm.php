<?php

    namespace Yelmohome_servidor\modelo;

    use Yelmohome_servidor\modelo\ModelFilm;
    require_once("../modelo/ModelFilm.php");

    if(isset($_GET["id_film"])){
        $id_film = $_POST["id_film"];
        $result = ModelFilm::showFilm($id_film);

        if(intval($result) == 1){
            $title = $result["title"];
            $author = $result["author"];
            $description = $result["description"];
            $rating = $result["rating"];
            $img = $result["img"];
            $premiere = $result["premiere"];
            $video = $result["video"];
        }
    }

    if(isset($_POST["update"])){
        $title = $_POST["title"];
        $author = $_POST["author"];
        $description = $_POST["description"];
        $rating = $_POST["rating"];
        $img = $_POST["img"];
        $premiere = $_POST["premiere"];
        $video = $_POST["video"];

        $result = ModelFilm::update(null, $title, $author,$description, $rating, $img, $premiere, $video);
    }

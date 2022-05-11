<?php

    namespace Yelmohome_servidor\modelo;

    use Yelmohome_servidor\modelo\ModelFilm;
    require_once("../modelo/ModelFilm.php");

    if(isset($_GET["id_film"])){
        $id_film = $_POST["id_film"];

        $result = ModelFilm::delete($id_film);

    }

?>
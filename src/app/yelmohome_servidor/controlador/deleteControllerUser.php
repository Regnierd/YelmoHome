<?php

    namespace Yelmohome_servidor\modelo;

    use Yelmohome_servidor\modelo\ModelUser;
    require_once("../modelo/ModelUser.php");

    if(isset($_GET["id_user"])){
        $id_user = $_POST["id_user"];

        $result = ModelUser::delete($id_user);

    }

?>
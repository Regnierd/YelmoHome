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

    //Encriptamos la contraseña al registrar el usuario
    $passEncrypted = password_hash($datos->password, PASSWORD_DEFAULT);

    //Clase dedicada para enviar un mensaje al cliente
    class Result {}
    $response = new Result();
    
    //Llamamos a la funcion searchUserEmail de la clase ModelUser por su email.
    $userExist = ModelUser::searchUserEmail($datos->email);

    //Si el email ya existe a la hora de registrarse enviará un mensaje en cuestión.
    if($userExist["email"] != null){
        $response->resultado = "NO";
        $response->menssage = "Ese correo ya esta registrado. Pruebe a iniciar sesión.";
    //Si no existe, inserta el usuario nuevo en la bd y enviará su mensaje en cuestión.
    }else{
        $result = ModelUser::insert($datos->name_user, $passEncrypted, $datos->email);
        $response->resultado = "OK";
        $response->menssage = "Registrado correctamente";
    }
    
    header('Content-Type: application/json');
    echo json_encode($response);

?>
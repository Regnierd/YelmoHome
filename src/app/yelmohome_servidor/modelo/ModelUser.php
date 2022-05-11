<?php 

    namespace Yelmohome_servidor\modelo;

    use PDO;
    use PDOException;

    class ModelUser{

        /**
         * Hacer la conexion
         */
        public static function conection($sql){
            [$host,$user,$passwd,$bd]=['localhost','yelmohomeUser','admin1234','yelmohome'];
            try{
                $conection = new PDO("mysql:host=$host; dbname=$bd;charset=utf8;", $user, $passwd);
                $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $result = $conection->query($sql);

                return $result;
            }catch(PDOException $ex){
                echo "Error ".$ex->getMessage()."<br />";
            }
        }

        /**
         * Insertar 
         */
        public static function insert($name, $pass, $email, $fileName){
            $sql = "insert into users (id_user, name_user, password, email, fileName) value (null, '$name', '$pass', '$email', '$fileName')";
            $result = self::conection($sql);
            if ($result==null) {
                exit("Error en consulta: $sql");
            }         
        }

        /**
         * eliminar de la bbdd
         *
         * @param  mixed $id_user
         * @return void
         */
        public static function delete($id_user){
            $sql = "delete from users where id_user = $id_user";
            $result = self::conection($sql);

            if ($result==null) {
                exit("Error en consulta: $sql");
            }
        }

        /**
         * funcion para mostrar Datos de un Usuario
         *
         * @param  mixed $codigo
         * @return void
         */
        public static function showUser($id_user){
            $sql = "select * from users where id_user = $id_user";
            $result = self::conection($sql);
            $user = $result->fetch(PDO::FETCH_ASSOC);
            
            return $user;
        }

        /**
         * Funcion que edita un usuario de la bbdd
         *
         * @param  mixed $id_user
         * @param  mixed $name
         * @param  mixed $pass
         * @param  mixed $email
         * @return void
         */
        public static function update($id_user, $name, $pass, $email, $fileName){
            $sql = "update users set name_user = '$name', password = '$pass', email = '$email', fileName = '$fileName' where id_user = $id_user;";
            $result = self::conection($sql);

            if ($result==null) {
                exit("Error en consulta: $sql");
            } 
        }

        /**
         * Funcion que busca un usuario por el nombre y contraseña
         * @return $user
         */
        public static function searchUser($name, $pass){
            $sql = "select * from users where name_user = '$name';";
            $result = self::conection($sql);
            $user = $result->fetch(PDO::FETCH_ASSOC);
            if(password_verify($pass, $user["password"])){
                return $user;
            }
            return 0;
            
        }

        /**
         * Funcion que busca un usuario por el email
         * @return $user
         */
        public static function searchUserEmail($email){
            $sql = "select (SELECT email FROM users WHERE email = '$email') AS email;";
            $result = self::conection($sql);
            $user = $result->fetch(PDO::FETCH_ASSOC);

            return $user;
        }
    }
?>
<?php

    namespace Yelmohome_servidor\modelo;

    class User{
        private $id_user;
        private $name;
        private $pass;
        private $email;
        private $fileName;

        public function __construct($id_user, $name, $pass, $email, $fileName){
            $this->id_user = $id_user;
            $this->name = $name;
            $this->pass = $pass;
            $this->email = $email;
            $this->fileName = $fileName;
        }
    
        public function __get($atributo){
            return $this->$atributo;
        }
    
        public function __set($atributo, $valor){
            $this->$atributo = $valor;
        }

    }

    

?>
<?php 
    namespace Yelmohome_servidor\modelo;
    
    /**
     * Clase categoria
     */
    class Category{
        public $category;
        public $films = [];
        

        public function __construct($category, $films){
            $this->category = $category;
            $this->films = $films;

        }

        public function __get($atributo){
            return $this->$atributo;
        }
    
        public function __set($atributo, $valor){
            $this->$atributo = $valor;
        }
    }

?>
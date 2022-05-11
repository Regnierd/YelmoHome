<?php 
    namespace Yelmohome_servidor\modelo;

    class Film{
        private $id_film;
        private $title;
        private $author;
        private $description;
        private $rating;
        private $img;
        private $premiere;
        private $video;
        private $categories;

        public function __construct($id_film, $title, $author, $description, $rating, $img, $premiere, $video, $categories){
            $this->id_film = $id_film;
            $this->title = $title;
            $this->author = $author;
            $this->description = $description;
            $this->rating = $rating;
            $this->img= $img;
            $this->premiere = $premiere;
            $this->video = $video;
            $this->categories = $categories;
        }

        public function __get($atributo){
            return $this->$atributo;
        }
    
        public function __set($atributo, $valor){
            $this->$atributo = $valor;
        }
    }

?>
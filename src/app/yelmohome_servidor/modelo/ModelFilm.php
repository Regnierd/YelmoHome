<?php
    namespace Yelmohome_servidor\modelo;

    use PDO;
    use PDOException;

    class ModelFilm{

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
         * eliminar de la bbdd
         *
         * @param  mixed $id_film
         * @return void
         */
        public static function delete($id_film){
            $sql = "delete from films where id_film = $id_film";
            $result = self::conection($sql);

            if ($result==null) {
                exit("Error en consulta: $sql");
            }
        }

        /**
         * editar un producto de la bbdd
         *
         * @param  mixed $id_film
         * @param  mixed $title
         * @param  mixed $author
         * @param  mixed $description
         * @param  mixed $rating
         * @param  mixed $img
         * @param  mixed $premiere
         * @param  mixed $video
         * @return void
         */
        public static function update($id_film, $title, $author, $description, $rating, $img, $premiere, $video){
            $sql = "update films set id_film = '$id_film', title = '$title', author = '$author', description = '$description', rating = $rating, img = '$img', premiere = '$premiere', video = '$video' where id_film = $id_film;";
            $result = self::conection($sql);

            if ($result==null) {
                exit("Error en consulta: $sql");
            } 
        }

        /**
         * funcino para mostrar Datos de una peli
         *
         * @param  mixed $codigo
         * @return void
         */
        public static function showFilm($id_film){
            $sql = "select * from films where id_film = $id_film;";
            $result = self::conection($sql);
            $film = $result->fetch(PDO::FETCH_ASSOC);
            
            return $film;
        }

        /**
         * funcion para mostrar el Listado de todos las pelis
         *
         * @return void
         */
        public static function showAllFilms(){
            
            $sql = "select * from films;";
            $result = self::conection($sql);
            $filmList = [];
            while($film = $result->fetch(PDO::FETCH_ASSOC)){
                array_push($filmList, $film);
            }
            
            return $filmList;
        }

        /**
         * Funcion para obtener todas las categorias
         */
        public static function getAllCategory(){
            $sql = "select * from category;";
            $result = self::conection($sql);
            $categories = [];
            while($category = $result->fetch(PDO::FETCH_ASSOC)){
                array_push($categories, $category);
            }
        
            
            return $categories;
        }

        /**
         * Mostrar todas las peliculas que pertenecen a una categoria en concreto
         * @param  mixed $id_category
         * @return array
         */
        public static function showAllFilmsACategory($id_category){
            /*
            * SELECT PARA SACAR TODAS LAS PELICULAS QUE PERTENECEN A UNA CATEGORIA EN CONCRETO
            *
            * select films.title, category.category from films inner join category_films on films.id_film = category_films.id_film inner join category on category_films.id_category = category.id_category where category_films.id_category = $id_category;
            */
            $sql = "select films.*, category.category from films inner join category_films on films.id_film = category_films.id_film inner join category on category_films.id_category = category.id_category where category_films.id_category = $id_category;";
            $result = self::conection($sql);
            $filmsACategoryList = [];
            while($filmsACategory = $result->fetch(PDO::FETCH_ASSOC)){
                array_push($filmsACategoryList, $filmsACategory);
            }
        
            
            return $filmsACategoryList;
        }

        /**
         * Mostrar todas las categorias que pertenecen a una pelicula en concreto.
         * @param mixed $title
         * @return array
         */
        public static function showCategoriesForAFilm($title){
            /**
            * SELECT PARA SACAR TODAS LAS CATEGORIAS DE UNA PELICULA EN CONCRETO
            * 
            * select films.title, category.category from films inner join category_films on films.id_film = category_films.id_film inner join category on category_films.id_category = category.id_category where films.title = "Al filo del mañana";
            */
            $sql = "select films.title, category.category from films inner join category_films on films.id_film = category_films.id_film inner join category on category_films.id_category = category.id_category where films.title = '$title';";
            $result = self::conection($sql);
            $categoriesAFilmList = [];
            while($categoriesAFilm = $result->fetch(PDO::FETCH_ASSOC)){
                array_push($categoriesAFilmList, $categoriesAFilm);
            }
            return $categoriesAFilmList;     
        }
    }
?>
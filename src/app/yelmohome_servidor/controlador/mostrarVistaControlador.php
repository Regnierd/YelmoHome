<?php
    namespace Yelmohome_servidor\modelo;
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    use Yelmohome_servidor\modelo\ModelFilm;
    require_once("../modelo/ModelFilm.php");
    require_once("../modelo/Film.php");
    require_once("../modelo/Category.php");

    $categories = ModelFilm::getAllCategory();
    
    $listaPeliculasPorCategorias = [];
    for ($i=0; $i < count($categories); $i++) { 
       $idCategory = $categories[$i]["id_category"];
       $filmsForCategory = ModelFilm::showAllFilmsACategory($idCategory);
       $category = new Category($categories[$i]["category"], $filmsForCategory);

       array_push($listaPeliculasPorCategorias, $category);
    }
    
    //$listaPeliculas = ModelFilm::showAllFilms();
    $filmsForCategoryJson = json_encode($listaPeliculasPorCategorias);
    //$listaPeliculasJson = json_encode($listaPeliculas);
    
    echo $filmsForCategoryJson;
    header('Content-Type: application/json');

?>
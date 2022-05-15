<?php
    namespace Yelmohome_servidor\modelo;
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    use Yelmohome_servidor\modelo\ModelFilm;
    require_once("../modelo/ModelFilm.php");
    require_once("../modelo/Film.php");
    require_once("../modelo/Category.php");

    //Obtenemos todas las categorias
    $categories = ModelFilm::getAllCategory();
    
    $listaPeliculasPorCategorias = [];
    
    //Bucle FOR para agregar al array listaPeliculasPorCategorias objetos de category
    for ($i=0; $i < count($categories); $i++) { 
       $idCategory = $categories[$i]["id_category"];
       //Obtenemos todas las peliculas que pertencen a una categoria en concreto.
       $filmsForCategory = ModelFilm::showAllFilmsACategory($idCategory);
       //Creamos el objeto category
       $category = new Category($categories[$i]["category"], $filmsForCategory);

       array_push($listaPeliculasPorCategorias, $category);
    }
     
    
    $filmsForCategoryJson = json_encode($listaPeliculasPorCategorias);
    
    //Enviará todas las peliculas separadas por su categorias
    echo $filmsForCategoryJson;
    header('Content-Type: application/json');

?>
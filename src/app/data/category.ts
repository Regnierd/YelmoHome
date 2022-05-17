import { Film } from "./pelicula";

/**
 * Clase category que contiene el nombre de la categoria
 * y el array de las películas que pertenecen a esa categoria
 */
export class Category{
    name_category: string;
    films: Film[];
    

    constructor(){
        this.name_category = "";
        this.films = [];
      
    }
}
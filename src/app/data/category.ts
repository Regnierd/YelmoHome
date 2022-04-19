import { Film } from "./pelicula";

export class Category{
    name_category: string;
    films: Film[];
    

    constructor(){
        this.name_category = "";
        this.films = [];
      
    }
}
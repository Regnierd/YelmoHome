
//Interfaz de las peliculas que obtendremos de la API
export interface FilmsJson {
    
    data: [
        {
            id_film:number;
            title:string;
            author:string;
            description:string;
            rating:number;
            img:string;
            premiere:string;
            video:string;
        }
    ]
}
/**
 * Clase película
 */
export class Film{
    id_film: number;
    title: string;
    author: string;
    description: string;
    rating: number;
    img: string;
    premiere: string;
    video: string;
    
    constructor(){
        this.id_film = 0;
        this.title = "";
        this.author = "";
        this.description = "";
        this.rating = 0;
        this.img = "";
        this.premiere = "";
        this.video = "";
        
    }
}
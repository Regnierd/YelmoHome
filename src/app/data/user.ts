/**
 * Clase usuario
 */
export class User{
    id_user: number;
    name_user: string;
    password: string;
    email: string;
    fileName: string;

    constructor(){
        this.id_user = 0;
        this.name_user = "";
        this.password = "";
        this.email = "";
        this.fileName = "";
    }
}
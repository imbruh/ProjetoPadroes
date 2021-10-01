import { Usuario } from "./Usuario";

export class UsuarioNull extends Usuario {   
    id = 0;

    nome = "anônimo";
 
    login = "usuario nao cadastrado";
   
    senha =  "usuario nao cadastrado";
}
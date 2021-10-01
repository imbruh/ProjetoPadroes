import { Usuario } from "../Model/Usuario";
import { UsuarioNull } from "../Model/UsuarioNull";

export class UsuarioRepository{
    public criar(usuario: Usuario): void {
        usuario.id = 1;
        
        console.log("Usuario criado")
    }
    
    public buscar(id: number): string {  
        let usuario = new UsuarioNull();
    
        if (id == 1) {
            usuario = new Usuario();
            usuario.id = 1;
            usuario.nome = "usuario teste";
            usuario.login = "teste";
            usuario.senha = "123";
        }
    
        return `Usuario: 
	Id: ${usuario.id}
	Nome: ${usuario.nome}
	Login: ${usuario.login}
	Senha: ${usuario.senha}`;
    }
}


export class Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;

}

export class UsuarioNull extends Usuario {
    
    id = 0;

    nome = "anônimo";
 
    login = "usuario nao cadastrado";
   
    senha =  "usuario nao cadastrado";
   
}

export class UsuarioRepository{
    public criar(usuario: Usuario): void {
        usuario.id = 1;
    
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

let usuarioRepository = new UsuarioRepository();

usuarioRepository.criar(new Usuario());
console.log(usuarioRepository.buscar(1));
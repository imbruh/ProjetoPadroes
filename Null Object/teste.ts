import { Usuario } from "./Model/Usuario";
import { UsuarioRepository } from "./Repository/UsuarioRepository";

let usuarioRepository = new UsuarioRepository();

usuarioRepository.criar(new Usuario());
console.log(usuarioRepository.buscar(2));

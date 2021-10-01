import { Arquitetura } from "./Arquitetura";
import { MontarQuarto } from "./MontarQuarto";

const arquitetura = new Arquitetura();
const builder = new MontarQuarto();

arquitetura.setBuilder(builder);

console.log("Quarto Simples");
arquitetura.montarQuartoSimples();
builder.getQuarto().listarItens();

console.log("Quarto Completo");
arquitetura.montarQuartoCompleto();
builder.getQuarto().listarItens();

console.log("Quarto Personalizado");
builder.adicionarCama();
builder.adicionarMesaComputador();
builder.adicionarComputador();
builder.getQuarto().listarItens();
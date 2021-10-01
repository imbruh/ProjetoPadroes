export class Pedido {
    codigo: number;
    produtos: string[];
    preco: number;

    constructor(preco: number) {
        this.preco = preco;
    }
}
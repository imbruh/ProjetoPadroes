export class Pedido {
    codigo: number;
    produtos: string[];
    preco: number;

    constructor(preco: number) {
        this.preco = preco;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getProdutos(): string[] {
        return this.produtos;
    }

    public setProdutos(produtos: string[]): void {
        this.produtos = produtos;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }
}
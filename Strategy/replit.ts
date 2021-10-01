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

export interface StrategyInterface {
    aplicarReajustePreco(pedido: Pedido): number;
}

export class CreditoStrategy implements StrategyInterface{
    public aplicarReajustePreco(pedido: Pedido) {
        return pedido.preco + (pedido.preco * 0.05) ;
    }
}

export class DinheiroStrategy implements StrategyInterface{
    public aplicarReajustePreco(pedido: Pedido) {
        return pedido.preco - (pedido.preco * 0.1) ;
    }
}

export class CalcularPreco {
    private estrategiaPreco: StrategyInterface;

    constructor(estrategia: StrategyInterface) {
        this.estrategiaPreco = estrategia;
    }

    public calcularPreco(pedido: Pedido): number {
        return this.estrategiaPreco.aplicarReajustePreco(pedido);
    }
}

const pedido = new Pedido(50);
const calculaPrecoCredito = new CalcularPreco(new CreditoStrategy());
const calculaPrecoDinheiro = new CalcularPreco(new DinheiroStrategy());

const valorComReajusteDinheiro = calculaPrecoDinheiro.calcularPreco(pedido); 
const valorComReajusteCredito = calculaPrecoCredito.calcularPreco(pedido);

console.log("O valor com reajuste do pagamento feito no dinheiro é: R$", valorComReajusteDinheiro);
console.log("O valor com reajuste do pagamento feito no crédito é: R$", valorComReajusteCredito);
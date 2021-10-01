export class Pedido {
    codigo: number;
    produtos: string[];
    preco: number;

    constructor(preco: number) {
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

export class BoletoStrategy implements StrategyInterface{
    public aplicarReajustePreco(pedido: Pedido) {
        return pedido.preco + (pedido.preco * 0.025) ;
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
const calculaPrecoBoleto = new CalcularPreco(new BoletoStrategy());

const valorComReajusteDinheiro = calculaPrecoDinheiro.calcularPreco(pedido); 
const valorComReajusteCredito = calculaPrecoCredito.calcularPreco(pedido);
const valorComReajusteBoleto = calculaPrecoBoleto.calcularPreco(pedido);

console.log("O valor com reajuste do pagamento feito no dinheiro é: R$", valorComReajusteDinheiro);
console.log("O valor com reajuste do pagamento feito no crédito é: R$", valorComReajusteCredito);
console.log("O valor com reajuste do pagamento feito no boleto é: R$", valorComReajusteBoleto);
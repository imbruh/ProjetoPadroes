import { CalcularPreco } from "./CalcularPreco";
import { CreditoStrategy } from "./CreditoStrategy";
import { DinheiroStrategy } from "./DinheiroStrategy";
import { Pedido } from "./Pedido";

const pedido = new Pedido(50);
const calculaPrecoCredito = new CalcularPreco(new CreditoStrategy());
const calculaPrecoDinheiro = new CalcularPreco(new DinheiroStrategy());

const valorComReajusteDinheiro = calculaPrecoDinheiro.calcularPreco(pedido); 
const valorComReajusteCredito = calculaPrecoCredito.calcularPreco(pedido);

console.log("O valor com reajuste do pagamento feito no dinheiro é: R$", valorComReajusteDinheiro);
console.log("O valor com reajuste do pagamento feito no crédito é: R$", valorComReajusteCredito);
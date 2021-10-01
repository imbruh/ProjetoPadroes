import { BoletoStrategy } from "./BoletoStrategy";
import { CalcularPreco } from "./CalcularPreco";
import { CreditoStrategy } from "./CreditoStrategy";
import { DinheiroStrategy } from "./DinheiroStrategy";
import { Pedido } from "./Pedido";

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
import { Pedido } from "./Pedido";
import { StrategyInterface } from "./StrategyInterface";

export class BoletoStrategy implements StrategyInterface{
    public aplicarReajustePreco(pedido: Pedido) {
        return pedido.preco + (pedido.preco * 0.025) ;
    }
}
import { Pedido } from "./Pedido";
import { StrategyInterface } from "./StrategyInterface";

export class CreditoStrategy implements StrategyInterface{
    public aplicarReajustePreco(pedido: Pedido) {
        return pedido.preco + (pedido.preco * 0.05) ;
    }
}
import { Pedido } from "./Pedido";
import { StrategyInterface } from "./StrategyInterface";

export class DinheiroStrategy implements StrategyInterface{
    public aplicarReajustePreco(pedido: Pedido) {
        return pedido.preco - (pedido.preco * 0.1) ;
    }
}
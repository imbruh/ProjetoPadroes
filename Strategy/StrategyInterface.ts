import { Pedido } from "./Pedido";

export interface StrategyInterface {
    aplicarReajustePreco(pedido: Pedido): number;
}
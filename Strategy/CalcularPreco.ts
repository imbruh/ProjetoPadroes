import { Pedido } from "./Pedido";
import { StrategyInterface } from "./StrategyInterface";

export class CalcularPreco {
    private estrategiaPreco: StrategyInterface;

    constructor(estrategia: StrategyInterface) {
        this.estrategiaPreco = estrategia;
    }

    public calcularPreco(pedido: Pedido): number {
        return this.estrategiaPreco.aplicarReajustePreco(pedido);
    }
}
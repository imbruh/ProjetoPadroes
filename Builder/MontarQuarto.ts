import { Quarto } from "./Quarto";

export class MontarQuarto implements Builder {
    private quarto: Quarto;

    constructor() {
        this.quarto = new Quarto();
    }

    public reset(): void {
        this.quarto = new Quarto();
    }

    public adicionarCama(): void {
        this.quarto.itens.push("cama");
    }

    public adicionarAbajur(): void {
        this.quarto.itens.push("abajur");
    }

    public adicionarGuardaRoupa(): void {
        this.quarto.itens.push("guarda roupa");
    }

    public adicionarMesaComputador(): void {
        this.quarto.itens.push("mesa do computador");
    }

    public adicionarComputador(): void {
        this.quarto.itens.push("computador");
    }

    public adicionarVentilador(): void {
        this.quarto.itens.push("ventilador");
    }

    public getQuarto(): Quarto {
        const result = this.quarto;
        this.reset();
        return result;
    }
}
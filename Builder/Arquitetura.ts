import { Builder } from "./Builder";

export class Arquitetura
 {
    private builder: Builder;

    constructor() {
        this.builder = {} as Builder
    }

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public montarQuartoSimples(): void {
        this.builder.adicionarCama();
        this.builder.adicionarGuardaRoupa();
        this.builder.adicionarVentilador();
    }

    public montarQuartoCompleto(): void {
        this.builder.adicionarCama();
        this.builder.adicionarGuardaRoupa();
        this.builder.adicionarVentilador();
        this.builder.adicionarAbajur();
        this.builder.adicionarMesaComputador();
        this.builder.adicionarComputador();
    }
}
export class Quarto {
    public itens: string[] = []

    public listarItens(): void {
        console.log(`Itens do quarto: ${this.itens.join(", ")}\n`)
    }
}

interface Builder {
    adicionarCama(): void;
    adicionarAbajur(): void;
    adicionarGuardaRoupa(): void;
    adicionarMesaComputador(): void;
    adicionarComputador(): void;
    adicionarVentilador(): void;
}

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

const arquitetura = new Arquitetura();
const builder = new MontarQuarto();

arquitetura.setBuilder(builder);

console.log("Quarto Simples");
arquitetura.montarQuartoSimples();
builder.getQuarto().listarItens();

console.log("Quarto Completo");
arquitetura.montarQuartoCompleto();
builder.getQuarto().listarItens();

console.log("Quarto Personalizado");
builder.adicionarCama();
builder.adicionarMesaComputador();
builder.adicionarComputador();
builder.getQuarto().listarItens();
export class Quarto {
    public itens: string[] = []

    public listarItens(): void {
        console.log(`Itens do quarto: ${this.itens.join(", ")}\n`)
    }
}
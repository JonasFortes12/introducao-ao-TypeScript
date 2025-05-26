
class Produto {

    public nome: string
    public preco: number
    public estoque: number

    constructor(
        nome: string,
        preco: number,
        estoque: number
    ) {
        this.preco = preco
        this.nome = nome
        this.estoque = estoque
    }

    comprar(qtd:number):number {
        this.estoque = this.estoque - qtd
        return this.estoque // estoque atualizado 
    }

    repor(qtd:number):number {
        this.estoque = this.estoque + qtd
        // this.estoque += qtd
        return this.estoque // estoque atualizado 
    }


}

const paes = new Produto("Pão", 1.00, 10)




// console.log(
//     `Comprando 2 paes. Estoque atual 
//     ${paes.comprar(2)}` // 8
// )
// console.log(
//     `Repondo 6 paes. Estoque atual 
//     ${paes.repor(6)}` // 14
// )
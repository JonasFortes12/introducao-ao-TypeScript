


function calcularMedia(notas: number[]):number{
    const total: number = notas.reduce((acc:number, nota:number)=> acc+nota, 0)
    return total/notas.length
}

console.log(calcularMedia([10, 5, 7, 8]))
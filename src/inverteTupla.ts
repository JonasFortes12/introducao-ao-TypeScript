
function inverterPar<T,U>([a , b]:[T, U]):[U, T] | undefined {

    return [b, a]
}

console.log(inverterPar(['a', 1]))
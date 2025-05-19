
interface Usuario {
    id: number
    nome: string
    email: string
    idade?: number
}

function criarUsuario(usuario: Usuario):void{
    console.log(`Usuario ${usuario.nome} criado!`)

}

criarUsuario({
    id:1, 
    email:"jonas@gmail.com",
    nome:"jonas",
    idade:34
})
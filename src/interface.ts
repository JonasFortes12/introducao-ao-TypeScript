
interface Usuario {
    id: number
    name: string
    email: string
    idade?: number

}

function criarUsuario(usuario: Usuario){
    console.log(`Usuário ${usuario.name} criado!`)
}

criarUsuario(
    {id:18, name:"Lucas", email:"lc@a.com"}
)


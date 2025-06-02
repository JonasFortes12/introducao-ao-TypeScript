
interface EviadorDeEmail {
    enviar(destino: string, mensagem:string):void
}

class ServicoDeEmail implements EviadorDeEmail{
    enviar(destino: string, mensagem: string): void {
        console.log(`Email enviado para
            ${destino}: ${mensagem}`)
    }
}

class CadastroDeUsuario {

    private servicoDeEmail: EviadorDeEmail;

   constructor(servicoDeEmail: EviadorDeEmail){
        this.servicoDeEmail = servicoDeEmail
   }

   cadastrar(nome:string, email:string){
        console.log(`Usuário ${nome} cadastrado!`)
        this.servicoDeEmail.enviar(email, "Bem vindo(a)!")
   }
}


// Exercício rápido: Use um objeto CadastroDeUsuario para
// cadastrar a usuária: nome:'Ana', Email:'ana@gmail.com'

const sistemaDeCadastro = new CadastroDeUsuario( new ServicoDeEmail())

sistemaDeCadastro.cadastrar('Ana', 'ana@gmail.com')

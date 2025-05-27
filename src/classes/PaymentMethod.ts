
abstract class PaymentMethod {
    abstract processPayment(amount: number):string;

}

class Creditcard extends PaymentMethod{
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via Cartão de Crédito`
    }
}

class Pix extends PaymentMethod{
    processPayment(amount: number): string {
        return `Pagamento de R$${amount} via Pix!`
    }
}

const creditPayment = new Creditcard()
const pixPayment = new Pix()

console.log(creditPayment.processPayment(300.00))
console.log(pixPayment.processPayment(60.00))
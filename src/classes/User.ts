
class User {
    // Atributos
    name: string
    age: number

    //Construtor
    constructor(name:string, age: number) {
        this.name = name
        this.age = age
    }

    //Métodos
    greet():string{
        return `Olá, sou o ${this.name}.
        E minha idade é ${this.age}`
    }

}
const user1 = new User("Lucas", 28)
const user2 = new User("Jonas", 24)
console.log(user1.name)
console.log(user1.age)
console.log(user1.greet())
console.log(user2.greet())

81
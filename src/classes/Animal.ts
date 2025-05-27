
class Animal {

    //Atributos
    public name:string

    //Contrutor
    constructor(name:string){
        this.name = name
    }

    //Métodos
    move(): string {
        return `${this.name} se move.`
    }
}

class Dog extends Animal{

    //método
    bark(): string {
        return 'Au Au!'
    }
}

class Frog extends Animal{
  move(): string{
    return `${this.name} pula!.`
  }
}

const frog1 = new Frog("Sapão")

console.log(frog1.move())




// const dog1 = new Dog('Snoopy')

// console.log(dog1.move())
// console.log(dog1.bark())
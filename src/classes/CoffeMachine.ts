abstract class CoffeMachine {
    abstract brew(): void

    prepareCoffe(): void{
        this.brew()
        this.heatWater()
    }

    private heatWater(): void {
        console.log("Aquecendo àgua...")
    }
}

class EspressoMachine extends CoffeMachine {
    brew(): void {
        console.log("Extraindo café expresso..")
    }
}

const maquinaCafe = new EspressoMachine()

maquinaCafe.prepareCoffe()
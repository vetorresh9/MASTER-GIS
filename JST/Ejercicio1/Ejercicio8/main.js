
class Cuadrado {
    constructor(medidaDelLado) {
        this.lado = medidaDelLado
    }

    calculoArea() {
        const area = this.lado * this.lado
        console.log('Area del cuadrado: ', area)
    }

    calculoPerimetro(){
        const perimetro = this.lado * 4
        console.log('Perimetro del cuadrado: ', perimetro)
    }
}

const cuadrado1 = new Cuadrado(32)

cuadrado1.calculoArea()
cuadrado1.calculoPerimetro()

const cuadrado2 = new Cuadrado(4)

cuadrado2.calculoArea()
cuadrado2.calculoPerimetro()
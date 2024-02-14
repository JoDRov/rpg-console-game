class Enemigo {
    _nombre: string
    
    constructor(nombre: string){
        this._nombre = nombre
    }

    grito(){
        console.log("AAAAARGGG")
    }
}

export class Diablillo extends Enemigo{
    _stamina: number
    _vidaMax: number
    _experiencia: number
    _setAtaques: object
    constructor(nombre: string,  setAtaques: object, stamina: number = 50, vidaMax: number = 80, experiencia: number = 5){
        super(nombre)
        this._stamina = stamina
        this._vidaMax = vidaMax
        this._experiencia = experiencia
        this._setAtaques = setAtaques
    }
    grito(){
        console.log("Ñeñeñeñe")
    }
}

class Heroe {
    _nombre: string
    _experiencia: number
    
    constructor(nombre: string, experiencia: number = 0){
        this._nombre = nombre
        this._experiencia = experiencia
    }

    grito(){
        console.log("¡Aaaaaah vamoooos!")
    }
}

export class HeroeGuerrero extends Heroe{
    _vidaMax: number
    _stamina: number
    _setAtaques: object
    constructor(nombre: string, setAtaques: object, experiencia: number = 0, vidaMax: number = 100, stamina: number = 60){
        super(nombre, experiencia)
        this._vidaMax = vidaMax
        this._stamina = stamina
        this._setAtaques = setAtaques
    }
}

type ataquesGuerrero = {
    ataqueRapido: number
    ataqueFuerte: number
    ataqueFuria: number
}

export const setAtaquesGuerrero: ataquesGuerrero  = {
    ataqueRapido: 50,
    ataqueFuerte: 70,
    ataqueFuria: 100
}

type ataquesDiablillo = {
    mordedura: number
    arañazo: number
    placaje: number
    reirse: number
}

export const setAtaquesDiablillo: ataquesDiablillo = {
    mordedura: 40,
    arañazo: 20,
    placaje: 30,
    reirse: 0
}

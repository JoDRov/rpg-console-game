class Enemigo {
    _nombre: string
    
    constructor(nombre: string){
        this._nombre = nombre
    }

    grito(): string{
        return "AAAAARGGG"
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
    grito(): string{
        return "Ñeñeñeñe"
    }

    get ataques() {
        return this._setAtaques
    }
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
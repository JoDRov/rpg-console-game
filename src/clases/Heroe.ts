class Heroe {
    _nombre: string
    _experiencia: number
    
    constructor(nombre: string, experiencia: number = 0){
        this._nombre = nombre
        this._experiencia = experiencia
    }

    grito(): string{
        return "¡Aaaaaah vamoooos!"
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

    get ataques() {
        return this._setAtaques
    }
}

type ataquesGuerrero = {
    ataqueRapido: number
    ataqueFuerte: number
    ataqueFuria: number
}



export const setAtaquesGuerrero: ataquesGuerrero  = {
    ataqueRapido: 20,
    ataqueFuerte: 40,
    ataqueFuria: 50
}
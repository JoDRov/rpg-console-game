import readlineSync from 'readline-sync';
import { setAtaquesGuerrero } from './clases/Heroe';
import { setAtaquesDiablillo } from './clases/Enemigo';

let answer: number
const combatDelay: number = 1000
let esTurnoHeroe: boolean  = true

export function combate(atacante: any , defensor: any, siguienteNivel: Function){
    while(atacante._vidaMax >= 1 && defensor._vidaMax >= 1){
        console.log("---------------------------------------------------")
        console.log(`Diablillo hp: ${defensor._vidaMax}`)
        console.log(`Heroe hp: ${atacante._vidaMax}`)
        
        if (esTurnoHeroe){
            esTurnoHeroe = turnoHeroe(defensor, esTurnoHeroe)
        }
        else if (!esTurnoHeroe){
            esTurnoHeroe = turnoEnemigo(atacante, esTurnoHeroe)
        }
    }

    if (atacante._vidaMax >= 0){
        console.log("¡Victoria!")
        atacante._experiencia += defensor._experiencia

        setTimeout(() => {
            console.log(`Experiencia obtenida: ${defensor._experiencia}`)
        }, combatDelay)

        setTimeout(() => {
            console.log(`Experiencia total: ${atacante._experiencia}`)
        }, combatDelay)
        siguienteNivel()
    }
    else if (defensor._vidaMax >= 0){
        console.log("¡Derrota!")
    }
}

function turnoHeroe(defensor: any, turno: boolean): boolean{
    answer = Number(readlineSync.question("¿Que ataque quieres utilizar? 1. Ataque Rapido, 2. Ataque Fuerte, 3. Ataque Furia "))

    switch(answer){
        case 1: 
            defensor._vidaMax -= setAtaquesGuerrero.ataqueRapido
            console.log(`!Heroe ha utilizado Ataque Rapido!`)
            turno = false
            break
        case 2: 
            defensor._vidaMax -= setAtaquesGuerrero.ataqueFuerte
            console.log(`!Heroe ha utilizado Ataque Fuerte!`)
            turno = false
            break
        case 3: 
            defensor._vidaMax -= setAtaquesGuerrero.ataqueFuria
            console.log(`!Heroe ha utilizado Ataque Furia!`)
            turno = false
            break
        default:
            console.log("Se te ha pasado el turno por pringao")
            turno = false
            break
    }
    return turno
}

function turnoEnemigo(atacante: any, turno: boolean): boolean{
    let ataqueEnemigo: number = Math.floor(Math.random() * 4)
    console.log("Turno enemigo")

    switch(ataqueEnemigo){
        case 0: 
            atacante._vidaMax -= setAtaquesDiablillo.arañazo
            turno = true
            console.log(`!Enemigo ha utilizado Arañazo!`)
            break
        case 1: 
            atacante._vidaMax -= setAtaquesDiablillo.mordedura
            turno = true
            console.log(`!Enemigo ha utilizado Mordedura!`)
            break
        case 2: 
            atacante._vidaMax -= setAtaquesDiablillo.placaje
            turno = true
            console.log(`!Enemigo ha utilizado Placaje!`)
            break
        case 3:
            atacante._vidaMax -= setAtaquesDiablillo.reirse
            turno = true
            console.log(`!Enemigo ha utilizado Reirse de ti!`)
            break
        default:
            turno = true
            break
    }  
    readlineSync.question("PULSA ENTER PARA CONTINUAR")
    return turno
}




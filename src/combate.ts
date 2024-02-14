import * as readlineSync from 'readline-sync';

import { Diablillo, setAtaquesDiablillo} from './clases';
import { HeroeGuerrero, setAtaquesGuerrero } from './clases';

let gameover: boolean = false
const respuestasPosibles = [0, 1, 2, 3]
let delay = 3000

const heroe = new HeroeGuerrero("Jose", setAtaquesGuerrero)
const diablillo = new Diablillo("Diablillo", setAtaquesDiablillo)

console.log("Responde con 1 para una respuesta positiva, y 0 para una respuesta negativa")
let answer: number
while (!gameover){
    answer = Number(readlineSync.question('Do you want to start the game? (number: 1 = yes, number: 0 = no) '))
    if (answer == respuestasPosibles[1]){
        intro(heroe, diablillo)
        gameover = true
    }
    else if (answer == respuestasPosibles[0]){
        console.log("Game ending")
        gameover = true
    }
}
function intro(protagonista: any, enemigo: any){
    let waitForResponse: boolean = true
    answer = -1
    console.log(`Bienvenido al fantastico mundo de wonderwiwi. En este mundo existen muchos peligros diferentes ${protagonista._nombre}, ten cuidado`)
    setTimeout(() => {
        console.log("Te acabas de despertar y te dispones a salir de paseo")
    }, delay);
    setTimeout(() => {
        answer = Number(readlineSync.question("¿Donde quieres ir? 0. Al bosque, 1. Al pueblo "))
        if (answer == 0){
            setTimeout(() => {
                console.log("Te diriges al bosque, pero justo antes de entrar, de un arbol salta hacia ti un diablillo rabioso, preparate para luchar!")
            }, 1000);
            setTimeout(() => {
                console.log("Diablillo: ")
                enemigo.grito()
            }, 3000);
            setTimeout(() => {
                console.log(`Heroe: `)
                protagonista.grito()
            }, 5000);
            setTimeout(() => {
                combate(protagonista, enemigo)
            }, 7000);
            waitForResponse = false
        }else if(answer == 1){
            console.log("Lets go to town")
            waitForResponse = false
        }
    }, delay * 2);

    
}

function combate(atacante: any, defensor: any){
    while(atacante._vidaMax >= 1 && defensor._vidaMax >= 1){
        console.log("---------------------------------------------------")
        console.log(`Diablillo hp: ${defensor._vidaMax}`)
        console.log(`Heroe hp: ${atacante._vidaMax}`)
        answer = Number(readlineSync.question("¿Que ataque quieres utilizar? 0. ataque rapido, 1. ataque fuerte, 2. ataque furia "))
        let turnoEnemigo: boolean = false
        console.log(turnoEnemigo)
        
        if (!turnoEnemigo){
            switch(answer){
                case 0: 
                    defensor._vidaMax -= setAtaquesGuerrero.ataqueRapido
                    turnoEnemigo = true
                    break
                case 1: 
                    defensor._vidaMax -= setAtaquesGuerrero.ataqueRapido
                    turnoEnemigo = true
                    break
                case 2: 
                    defensor._vidaMax -= setAtaquesGuerrero.ataqueFuria
                    turnoEnemigo = true
                    break
            }
        }else{
            let ataqueEnemigo: number = Math.ceil(Math.random() * 4)

            switch(ataqueEnemigo){
                case 0: 
                    atacante._vidaMax -= setAtaquesDiablillo.arañazo
                    turnoEnemigo = false
                    break
                case 1: 
                    atacante._vidaMax -= setAtaquesDiablillo.mordedura
                    turnoEnemigo = false
                    break
                case 2: 
                    atacante._vidaMax -= setAtaquesDiablillo.placaje
                    turnoEnemigo = false
                    break
                case 3:
                    atacante._vidaMax -= setAtaquesDiablillo.reirse
                    turnoEnemigo = false
                    break
            }       
        }
        
    }
    if (atacante._vidaMax >= 0){
        console.log("¡Victoria!")
        atacante._experiencia += defensor._experiencia
        setTimeout(() => {
            console.log(`Experiencia obtenida: ${defensor._experiencia}`)
        }, delay);
        setTimeout(() => {
            console.log(`Experiencia total: ${atacante._experiencia}`)
        }, delay * 2);
    }else if (defensor >= 0){
        console.log("¡Derrota!")
    }
}



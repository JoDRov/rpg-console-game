import { combate } from "./combate"
import readlineSync from "readline-sync"
import { Diablillo, setAtaquesDiablillo} from './clases/Enemigo';
import { HeroeGuerrero, setAtaquesGuerrero } from './clases/Heroe';

export let enemigo: Diablillo = new Diablillo("Diablillo", setAtaquesDiablillo)

let startOrExitGame: boolean = false
const delay:number = 3000

console.log("Responde con 1 para una respuesta positiva, y 0 para una respuesta negativa")

while (!startOrExitGame){
    const answer = Number(readlineSync.question('¿Quieres empezar el juego? '))

    if (answer == 1){
        const heroe: HeroeGuerrero = creacionDePersonaje()
        intro(heroe)
        startOrExitGame = true
    }
    else if (answer == 0){
        console.log("Game ended")
        startOrExitGame = true
    }
}

function creacionDePersonaje(){
    const answerName: string = readlineSync.question("¿Cual es tu nombre? ")
    const answerClass: number = Number(readlineSync.question("¿Que clase quieres? 1. Guerrero "))
    let heroe 

    if (answerClass === 1){
        heroe = new HeroeGuerrero(answerName, setAtaquesGuerrero)
    }
    else{
        heroe = new HeroeGuerrero(answerName, setAtaquesGuerrero)
    }

    return heroe
}

function intro(protagonista: any){
    console.log(`Bienvenido al fantastico mundo de Wonderwiwi. En este mundo existen muchos peligros diferentes ${protagonista._nombre}, ten cuidado`)

    setTimeout(() => {
        console.log("Te acabas de despertar y te dispones a salir de paseo")
    }, delay)

    setTimeout(() => {
        const answer = Number(readlineSync.question("¿Donde quieres ir? 1. Al bosque, 2. Al pueblo "))
        if (answer == 1){
            direccionBosque(protagonista)
        }
        else if(answer == 2){
            console.log("Lets go to town")
        }
    }, delay * 2)
}

function direccionBosque(protagonista: any){
    setTimeout(() => {
        console.log("Te dirijes al bosque, pero justo antes de entrar, de un arbol salta hacia ti un diablillo rabioso, preparate para luchar!")
    }, 1000)
    
    setTimeout(() => {
        console.log(`Enemigo ${enemigo._nombre}: ${enemigo.grito()}`)
    }, 4000)
    
    setTimeout(() => {
        console.log(`Heroe ${protagonista._nombre}: ${protagonista.grito()}`)
    }, 6000)
    
    setTimeout(() => {
        const siguienteNivel: Function = () => dentroBosque()
        combate(protagonista, enemigo, siguienteNivel)
    }, 7000)
}

export function dentroBosque(){
    setTimeout(() => {
        console.log(`tras vencer al desagradable ${enemigo._nombre} sigues tu camino y te adentras en el bosque...`)
    }, delay);
}
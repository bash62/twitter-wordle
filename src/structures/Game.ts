
import { letterPosition } from "../enums/stringEnum";
import { AttempMapType, GameInterface, State } from "../typings/GameType";
import { LangType } from "../typings/Wordata";
import Word from "./Word";
import Wordle from "./Wordle";


export default class Game implements GameInterface{


    constructor(
        lang: LangType,
        public word= new Word(lang),
        public canvas= new Wordle(word.word),
        public round=0,
        public playerAttemps = [],
        public state: State="pending",
    ){
        console.log(word)

        this.canvas.createBackground();
        //@ts-ignore
        this.canvas.createRow(this.word.word,this.playerAttemps,this.round);

    }


    public playWord(word: string): void{
        
        word = word.toUpperCase();
        if(word.length !== this.word.word.length){
            throw new Error("Word count does not match");
        }
        if(this.word.word === word){
            this.state = "done";
        }

        else{

            const attempMap: AttempMapType = new Map();

            for(let i=0;i<this.word.word.length;i++){
                

                if(word[i] === this.word.word[i]){
                    attempMap.set(i,letterPosition.GOOD);
                }
                else if(this.word.word.indexOf(word[i]) > -1){
                    attempMap.set(i,letterPosition.SOMEWHERE);
                }
                else {
                    attempMap.set(i,letterPosition.BAD);
                }

            }
            this.playerAttemps.push(attempMap);
            this.canvas.createBackground();
            //@ts-ignore
            this.canvas.createRow(word,this.playerAttemps,this.round);
            console.log("joué.")
            this.round += 1;
        }

    }

}

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
        public playerAttemps= [],
        public state: State="pending",
    ){

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
                
                console.log(this.word.word.indexOf(word[i]))

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
            this.round += 1;
        }

    }

    log(){
        console.log("New Worddlebot img saved")
        this.canvas.createBackground();
        this.canvas.saveCanvasToImg(this.canvas.GAME_CANVAS);
        this.canvas.createRow(this.word.word,this.playerAttemps);
    }



}
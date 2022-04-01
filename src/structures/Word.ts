const fs = require('fs');
import { LangType, WordData, JsonData } from "../typings/Wordata";

const wordlistFolder = __dirname + "/../../asset/wordlist/" ;

export default class Word implements WordData {

    constructor(
        public langage: LangType,
        public cat?: string,
        public word?: string,
    ){
        this.langage = langage;
        this.pickRandomWord();
    }


    public getWord(): string {
        return this.word;
    }

    public setWord(value:string){
        this.word = value;
    }
    /**
     * 
     */

    private pickRandomWord(): void {
        let path = wordlistFolder+'/'+this.langage+'/'
        let files = fs.readdirSync(path);

        const chosenFile = files[Math.floor(Math.random()*files.length)]

        let jsonData:JsonData = JSON.parse(fs.readFileSync(path+chosenFile, {encoding:'utf8', flag:'r'}));
        this.cat = jsonData.CAT;
        this.word = jsonData.DATA[Math.floor(Math.random()*jsonData.DATA.length)]
    }
}
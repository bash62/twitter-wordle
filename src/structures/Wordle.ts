import { Canvas, createCanvas, loadImage, registerFont } from "canvas"
import { AttempMapType } from "../typings/GameType"
registerFont(__dirname + '../../../asset/fonts/Bangers.ttf', { family: 'Bangers' })
registerFont(__dirname + '../../../asset/fonts/ProductSansBold.ttf', { family: 'ProductSansBold' })

const fs = require('fs')

export default class Wordle {

    public CANVAS_WIDTH = 1200
    public CANVAS_HEIGHT = 675
    public GAME_CANVAS;
    public GAME_CANVAS_CTX;
    public WORD: string;


    constructor(word: string) {
        this.WORD = word;
        this.GAME_CANVAS = createCanvas(this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.GAME_CANVAS_CTX = this.GAME_CANVAS.getContext('2d');
    }

    public createRow(word: string, playerAttemps: [AttempMapType], round: number): void {

        console.log("<<< CreateRow >>>", round)

        let WORD = this.WORD.length;

        const CUBE_SIZE = this.CANVAS_WIDTH / 15;
        const CUBE_OFFSET = 0.35;
        const ROW_SIZE = CUBE_SIZE * WORD + (WORD * CUBE_OFFSET) / 2;
        const CUBE_BASE = (this.CANVAS_WIDTH / 2 - ROW_SIZE / 2) + 1.5


        for (let a = round; a < playerAttemps.length; a++) {
            for (let i = 0; i < WORD; i++) {
                console.log("ok")
                //CUBE
                switch (playerAttemps[a].infoPosition.get(i)) {
                    case 0: {
                        this.GAME_CANVAS_CTX.fillStyle = '#2a27'
                        break;
                    }
                    case 1: {
                        this.GAME_CANVAS_CTX.fillStyle = 'orange'
                        break;
                    }
                    default: {
                        this.GAME_CANVAS_CTX.fillStyle = 'red'
                        break;
                    }
                }

                this.GAME_CANVAS_CTX.fillRect(CUBE_BASE + (i * CUBE_SIZE) + CUBE_OFFSET * i, this.CANVAS_HEIGHT / 3 + 35 + a * CUBE_SIZE + a * CUBE_OFFSET, CUBE_SIZE, CUBE_SIZE)
                this.GAME_CANVAS_CTX.font = '65px Bangers '
                this.GAME_CANVAS_CTX.fillStyle = "#fff"
                this.GAME_CANVAS_CTX.fillText(word[i], (CUBE_BASE + (i * CUBE_SIZE) + CUBE_SIZE / 2 - 15), this.CANVAS_HEIGHT / 3 + 25 + a * CUBE_SIZE + a * CUBE_OFFSET + CUBE_SIZE - 6)

                this.GAME_CANVAS_CTX.fillStyle = '#2a2756'
            }
        }

        this.saveCanvasToImg(this.GAME_CANVAS);
    }

    public createEmptyRow(word: string, playerAttemps: [AttempMapType], round: number): void {

        console.log("<<< CreateEmptyRow >>>", round)

        let WORD = this.WORD.length;

        const CUBE_SIZE = this.CANVAS_WIDTH / 15;
        const CUBE_OFFSET = 0.35;
        const ROW_SIZE = CUBE_SIZE * WORD + (WORD * CUBE_OFFSET) / 2;
        const CUBE_BASE = (this.CANVAS_WIDTH / 2 - ROW_SIZE / 2) + 1.5
   

        for (let i = 0; i < WORD; i++) {


            if(playerAttemps[round] ){
                switch (playerAttemps[round].infoPosition.get(i)) {
                    case 0: {
                        this.GAME_CANVAS_CTX.fillStyle = '#2a27'
                        this.GAME_CANVAS_CTX.fillRect(CUBE_BASE + (i * CUBE_SIZE) + CUBE_OFFSET * i, this.CANVAS_HEIGHT / 3 + 35 + round * CUBE_SIZE + round* CUBE_OFFSET, CUBE_SIZE, CUBE_SIZE)
                        this.GAME_CANVAS_CTX.font = '65px Bangers '
                        this.GAME_CANVAS_CTX.fillStyle = "#fff"
                        this.GAME_CANVAS_CTX.fillText(word[i], (CUBE_BASE + (i * CUBE_SIZE) + CUBE_SIZE / 2 - 15), this.CANVAS_HEIGHT / 3 + 25 + round * CUBE_SIZE + round * CUBE_OFFSET + CUBE_SIZE - 6)
            
                        break;
                    }
                    default: {
                        this.GAME_CANVAS_CTX.fillStyle = '#2a2756'
                        this.GAME_CANVAS_CTX.fillRect(CUBE_BASE + (i * CUBE_SIZE) + CUBE_OFFSET * i, this.CANVAS_HEIGHT / 3 + 35 + round * CUBE_SIZE + round* CUBE_OFFSET, CUBE_SIZE, CUBE_SIZE)
                        this.GAME_CANVAS_CTX.font = '65px Bangers '
                        this.GAME_CANVAS_CTX.fillStyle = "#fff"
                        this.GAME_CANVAS_CTX.fillText(".", (CUBE_BASE + (i * CUBE_SIZE) + CUBE_SIZE / 2 - 15), this.CANVAS_HEIGHT / 3 + 25 + round * CUBE_SIZE + round * CUBE_OFFSET + CUBE_SIZE - 6)
            
                        break;
                    }
                }
            }
            else if(playerAttemps[round-1]){
                switch (playerAttemps[round-1].infoPosition.get(i)) {
                    case 0: {
                        this.GAME_CANVAS_CTX.fillStyle = '#2a27'
                        this.GAME_CANVAS_CTX.fillRect(CUBE_BASE + (i * CUBE_SIZE) + CUBE_OFFSET * i, this.CANVAS_HEIGHT / 3 + 35 + round * CUBE_SIZE + round* CUBE_OFFSET, CUBE_SIZE, CUBE_SIZE)
                        this.GAME_CANVAS_CTX.font = '65px Bangers '
                        this.GAME_CANVAS_CTX.fillStyle = "#fff"
                        this.GAME_CANVAS_CTX.fillText(word[i], (CUBE_BASE + (i * CUBE_SIZE) + CUBE_SIZE / 2 - 15), this.CANVAS_HEIGHT / 3 + 25 + round * CUBE_SIZE + round * CUBE_OFFSET + CUBE_SIZE - 6)
            
                        break;
                    }
                    default: {
                        this.GAME_CANVAS_CTX.fillStyle = '#2a2756'
                        this.GAME_CANVAS_CTX.fillRect(CUBE_BASE + (i * CUBE_SIZE) + CUBE_OFFSET * i, this.CANVAS_HEIGHT / 3 + 35 + round * CUBE_SIZE + round* CUBE_OFFSET, CUBE_SIZE, CUBE_SIZE)
                        this.GAME_CANVAS_CTX.font = '65px Bangers '
                        this.GAME_CANVAS_CTX.fillStyle = "#fff"
                        this.GAME_CANVAS_CTX.fillText(".", (CUBE_BASE + (i * CUBE_SIZE) + CUBE_SIZE / 2 - 15), this.CANVAS_HEIGHT / 3 + 25 + round * CUBE_SIZE + round * CUBE_OFFSET + CUBE_SIZE - 6)
            
                        break;
                    }
                }

            }
            else{
                this.GAME_CANVAS_CTX.fillStyle = '#2a2756'
                this.GAME_CANVAS_CTX.fillRect(CUBE_BASE + (i * CUBE_SIZE) + CUBE_OFFSET * i, this.CANVAS_HEIGHT / 3 + 35 + round * CUBE_SIZE + round* CUBE_OFFSET, CUBE_SIZE, CUBE_SIZE)
                this.GAME_CANVAS_CTX.font = '65px Bangers '
                this.GAME_CANVAS_CTX.fillStyle = "#fff"
                this.GAME_CANVAS_CTX.fillText(".", (CUBE_BASE + (i * CUBE_SIZE) + CUBE_SIZE / 2 - 15), this.CANVAS_HEIGHT / 3 + 25 + round * CUBE_SIZE + round * CUBE_OFFSET + CUBE_SIZE - 6)
    
            }

            console.log(round)
            //CUBE
            

            

        }


        this.saveCanvasToImg(this.GAME_CANVAS);
    }



    public createBackground() {

        const { createCanvas, loadImage } = require('canvas')
        const canvas = this.GAME_CANVAS;
        const ctx = this.GAME_CANVAS_CTX;

        // // WORDLE SQUARE
        // ctx.fillStyle= 'rgba(0,0,0,0.5)'
        // ctx.fillRect(300-8, this.CANVAS_HEIGHT/12-6, this.CANVAS_WIDTH/2,this.CANVAS_HEIGHT/2+this.CANVAS_HEIGHT/3)


        // WORDLE SQUARE
        ctx.fillStyle = '#6F73D8'
        ctx.fillRect(300, this.CANVAS_HEIGHT / 12, this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 2 + this.CANVAS_HEIGHT / 3)


        //WORDLE BANNER
        ctx.fillStyle = '#C9BF66'
        ctx.fillRect(300, this.CANVAS_HEIGHT / 12, this.CANVAS_WIDTH / 2, this.CANVAS_HEIGHT / 4)

        //WORDLE MINIMIZE

        const WIDTH_BUTTON_START = this.CANVAS_HEIGHT / 3 + this.CANVAS_WIDTH / 2 + 50;


        ctx.beginPath();
        ctx.fillStyle = "#37E41B";
        ctx.arc(WIDTH_BUTTON_START - 100, 75, 9, 0, 2 * Math.PI);
        ctx.fill();

        //WORDLE FULL
        ctx.beginPath();
        ctx.fillStyle = "#BD810D";
        ctx.arc(WIDTH_BUTTON_START - 50, 75, 9, 0, 2 * Math.PI);
        ctx.fill();

        //WORDLE CLOSE
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.arc(WIDTH_BUTTON_START, 75, 9, 0, 2 * Math.PI);
        ctx.fill();

        //WORDLE TITLE SHADOW
        ctx.font = '72px Bangers '
        ctx.fillStyle = "#3A5D6C"
        ctx.fillText('WordleBot', (this.CANVAS_WIDTH / 2 - ctx.measureText('WORDLEBOT').width / 2) + 1.5 - 3, this.CANVAS_HEIGHT / 4 - 3)

        //WORDLE TITLE
        ctx.fillStyle = "#399AC3"
        ctx.fillText('WordleBot', (this.CANVAS_WIDTH / 2 - ctx.measureText('WORDLEBOT').width / 2) + 1.5, this.CANVAS_HEIGHT / 4)


        // Draw line under text
        var text = ctx.measureText('Awesome!')
        ctx.strokeStyle = 'rgba(0,0,0,0.5)'
        ctx.beginPath()
        ctx.lineTo(450, 102)
        ctx.lineTo(515 + text.width, 102)
        ctx.stroke()

        return canvas;
    }

    public saveCanvasToImg(Canvas: Canvas) {
        let fileBuffer = Canvas.toBuffer('image/png')
        fs.writeFileSync(__dirname + '/test.png', fileBuffer)
    }
}

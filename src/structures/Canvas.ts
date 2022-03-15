

import {  createCanvas, loadImage } from "canvas"


const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 675

export default class Wordle {

    public test() {

        const { createCanvas, loadImage } = require('canvas')
        const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
        const ctx = canvas.getContext('2d')

        // Write "Awesome!"
        ctx.font = '100px Impact'
        
        // ctx.fillText('Awesome!', 50, 100)

        // Draw line under text
        var text = ctx.measureText('Awesome!')
        ctx.strokeStyle = 'rgba(0,0,0,0.5)'
        ctx.beginPath()
        ctx.lineTo(50, 102)
        ctx.lineTo(50 + text.width, 102)
        ctx.stroke()
        console.log("http://"+canvas.toDataURL())
    }

    public toString() : void 
    {
        console.log("ok")
    }
}


import Canvas from './structures/Wordle';
import Word from './structures/Word';
import Core from './structures/Core';
import Game from './structures/Game';
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});







const G = new Game("FR");
G.log();
//G.log();


rl.question('Word :  ', (answer) => {
    G.playWord(answer)
    rl.close();

});






// core.readJSON();



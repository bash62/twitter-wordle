


import Game from './structures/Game';
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const G = new Game("FR");



rl.question('Word :  ', (answer) => {
    G.playWord(answer)
    rl.close();

});
rl.question('Word : 2 ', (answer) => {
    G.playWord(answer)
    rl.close();

});
rl.question('Word : 3 ', (answer) => {
    G.playWord(answer)
    rl.close();

});



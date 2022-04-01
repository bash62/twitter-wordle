


import Game from './structures/Game';
import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const G = new Game("FR");



rl.question('Premiere  tentetative : ', (answer1) => {
    G.playWord(answer1);
    rl.question('Deuxieme tentative : ', (answer2) => {
        G.playWord(answer2)
        rl.question('Deuxieme tentative : ', (answer3) => {
          G.playWord(answer3)
          rl.question('Deuxieme tentative : ', (answer4) => {
            G.playWord(answer4)
            console.log("ok") 
            rl.close();
        });
          console.log("ok") 
          rl.close();
      });
        console.log("ok") 
        rl.close();
    });

});






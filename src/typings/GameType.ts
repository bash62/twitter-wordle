import { letterPosition } from "../enums/stringEnum";
import Word from "../structures/Word";
import Wordle from "../structures/Wordle";

export type State = "pending" | "done";

export interface GameInterface {

    word?: Word,
    round?: number,
    playerAttemps?: AttempMapType[],
    state?: State,
    canvas?: Wordle

}

export type AttempMapType = Map<number,letterPosition> 
import { useState } from "react";
import { createArray } from "../utils/array";
import { CreateShip } from "../utils/battlefield";
import { RandomInt } from "../utils/random";
// import { HIT_SHIP, HIT_WATER, SHIP, WATER } from "./cellstate";
import { cellState } from "./cellstate";

const MATRIX_MAX = 10;


const CreateBattlefield = () => {
    const emptyBattlefield = createArray(MATRIX_MAX, () => createArray(MATRIX_MAX, () => 0));
    const WarShip = CreateShip(4, MATRIX_MAX);

    WarShip.forEach(({ x, y }) => {
        emptyBattlefield[y][x] = cellState.SHIP;
    });

    return emptyBattlefield;
};

export const useGameState = () => {
    //const turn = 0;
    const [state, setState] = useState({
        matrix: CreateBattlefield(),
        turn: 0,
        win: false,
    });
    const reset = () => {
        setState({
            matrix: CreateBattlefield(),
            turn: 0,
            win: false,
        });

        console.log('RESET');
    };

    const fire = (x: number, y: number) => {
        //state.turn += 1;
        const cell = state.matrix[y][x];
        if (cell === cellState.HIT_WATER || cell === cellState.HIT_SHIP) { return; };

        const cellStateNew = cell === cellState.WATER ? cellState.HIT_WATER : cellState.HIT_SHIP;
        state.matrix[y][x] = cellStateNew;
        const win = state.matrix.every((line) => line.every((val) => val !== cellState.SHIP));
        
        state.turn += 1;
        setState({ ...state, turn: state.turn, win });
    };

    const { turn, matrix, win } = state;
    //const matrix = CreateBattlefield();
    return { turn, reset, matrix, fire, win };
};
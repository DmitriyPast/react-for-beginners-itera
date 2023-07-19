import { createArray } from "./array";
import { RandomInt } from "./random";

type Point = { x: number, y: number }
export const CreateShip = (length: number, maxSize: number): Point[] => {
    const direction = RandomInt(0, 2) % 2 === 0 ? "horizontal" : "vertical";
    return direction === "horizontal" ? createHorizontal(length, maxSize) : createVertical(length, maxSize);
    //return createHorizontal(length, maxSize)//createVertical(length, maxSize)
};

const createHorizontal = (length: number, maxSize: number) => {
    const Xmax = maxSize - length + 1;
    const Ymax = maxSize;

    const headX = RandomInt(0, Xmax);
    const headY = RandomInt(0, Ymax);

    return createArray(length, (i) => {
        return { x: headX + i, y: headY };
    });
};

const createVertical = (length: number, maxSize: number) => {
    const Xmax = maxSize;
    const Ymax = maxSize - length + 1;

    const headX = RandomInt(0, Xmax);
    const headY = RandomInt(0, Ymax);

    return createArray(length, (i) => {
        return { x: headX, y: headY + i };
    });
};
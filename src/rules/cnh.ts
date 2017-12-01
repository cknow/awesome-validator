import { AbstractCalculation } from './abstract-calculation';

export class Cnh extends AbstractCalculation {

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 11;
    }

    /**
     * Validate Calculation.
     */
    protected validateCalculation(input: string): boolean {
        let i: number;
        let j: number;
        let v: number;
        let dsc: number;
        let x: number;
        let vl1: number;
        let vl2: number;

        for (i = 0, j = 9, v = 0; i < 9; ++i, --j) {
            v += +(Number(input[i]) * j);
        }

        dsc = 0;
        vl1 = v % 11;

        if (vl1 >= 10) {
            vl1 = 0;
            dsc = 2;
        }

        for (i = 0, j = 1, v = 0; i < 9; ++i, ++j) {
            v += +(Number(input[i]) * j);
        }

        x = v % 11;
        vl2 = (x >= 10) ? 0 : x - dsc;

        return `${vl1}${vl2}` === input.substr(-2);
    }
}

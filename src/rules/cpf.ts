import { AbstractCalculation } from './abstract-calculation';

export class Cpf extends AbstractCalculation {

    /**
     * Validate Calculation.
     */
    protected validateCalculation(input: string): boolean {
        let i: number;
        let n: number;
        let s: number;

        for (s = 10, n = 0, i = 0; s >= 2; n += Number(input[i++]) * s--);

        n = n % 11;

        if (Number(input[9]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        for (s = 11, n = 0, i = 0; s >= 2; n += Number(input[i++]) * s--);

        n = n % 11;

        if (Number(input[10]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        return true;
    }
}

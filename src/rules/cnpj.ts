import { AbstractCalculation } from './abstract-calculation';

export class Cnpj extends AbstractCalculation {

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 14;
    }

    /**
     * Validate Calculation.
     */
    protected validateCalculation(input: string): boolean {
        const b: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        let i: number;
        let n: number;

        for (i = 0, n = 0; i < 12; n += Number(input[i]) * b[++i]);

        n = n % 11;

        if (Number(input[12]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        for (i = 0, n = 0; i <= 12; n += Number(input[i]) * b[i++]);

        n = n % 11;

        if (Number(input[13]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        return true;
    }
}

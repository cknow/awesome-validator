import { AbstractCalculation } from './abstract-calculation';

export class Bsn extends AbstractCalculation {

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 9;
    }

    /**
     * Validate Calculation.
     */
    protected validateCalculation(input: string): boolean {
        let sum: number = Number(input[8]) * -1;

        for (let i: number = 9; i > 1; --i) {
            sum += Number(input[9 - i]) * i;
        }

        return sum !== 0 && sum % 11 === 0;
    }
}

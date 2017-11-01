
import { AbstractCalculation } from './abstract-calculation';

export class Pesel extends AbstractCalculation {

    /**
     * Validate Calculation
     */
    protected validateCalculation(input: string): boolean {
        const weights: number[] = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        const targetControlNumber: number = Number(input[10]);

        let calculateControlNumber: number = 0;

        for (let i: number = 0; i < 10; ++i) {
            calculateControlNumber += (Number(input[i]) * weights[i]);
        }

        calculateControlNumber = (10 - calculateControlNumber % 10) % 10;

        return targetControlNumber === calculateControlNumber;
    }
}

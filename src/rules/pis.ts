import { AbstractCalculation } from './abstract-calculation';

export class Pis extends AbstractCalculation {

    /**
     * Validate Calculation
     */
    protected validateCalculation(input: string): boolean {
        const multipliers: number[] = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let summation: number = 0;

        for (let position: number = 0; position < 10; ++position) {
            summation += Number(input[position]) * multipliers[position];
        }

        return Number(input[10]) === ((summation % 11 < 2) ? 0 : 11 - (summation % 11));
    }
}

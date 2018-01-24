import { AbstractCalculation } from './abstract-calculation';

export class Luhn extends AbstractCalculation {

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 0;
    }

    /**
     * Validate Calculation.
     */
    protected validateCalculation(input: string): boolean {
        let sum: number = 0;
        const parity: number = input.length % 2;

        for (let i: number = 0; i < input.length; ++i) {
            let digit: number = Number(input.substr(i, 1));

            if (parity === (i % 2)) {
                digit += digit;

                if (digit >= 9) {
                    digit = digit - 9;
                }
            }

            sum += digit;
        }

        return (sum % 10) === 0;
    }
}

export default Luhn;

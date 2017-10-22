
import { AbstractRule } from './abstract-rule';

export class Pesel extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const s: string = String(input);

        if (!/^\d{11}$/.test(s)) {
            return false;
        }

        const weights: number[] = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        const targetControlNumber: number = Number(s[10]);

        let calculateControlNumber: number = 0;

        for (let i: number = 0; i < 10; ++i) {
            calculateControlNumber += (Number(s[i]) * weights[i]);
        }

        calculateControlNumber = (10 - calculateControlNumber % 10) % 10;

        return targetControlNumber === calculateControlNumber;
    }
}

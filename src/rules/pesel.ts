
import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export class Pesel extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 11 || new Regex(RegExp(`${Number(c[0])}{11}`)).validate(c)) {
            return false;
        }

        const weights: number[] = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        const targetControlNumber: number = Number(c[10]);

        let calculateControlNumber: number = 0;

        for (let i: number = 0; i < 10; ++i) {
            calculateControlNumber += (Number(c[i]) * weights[i]);
        }

        calculateControlNumber = (10 - calculateControlNumber % 10) % 10;

        return targetControlNumber === calculateControlNumber;
    }
}

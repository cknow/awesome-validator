import { AbstractRule } from './abstract-rule';

export class Pis extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 11 || RegExp(`${Number(c[0])}{11}`).test(c)) {
            return false;
        }

        const multipliers: number[] = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let summation: number = 0;

        for (let position: number = 0; position < 10; ++position) {
            summation += Number(c[position]) * multipliers[position];
        }

        return Number(c[10]) === ((summation % 11 < 2) ? 0 : 11 - (summation % 11));
    }
}

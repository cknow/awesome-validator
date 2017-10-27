import { AbstractRule } from './abstract-rule';

export class Cnpj extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 14 || RegExp(`${Number(c[0])}{14}`).test(c)) {
            return false;
        }

        const b: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

        let i: number;
        let n: number;

        for (i = 0, n = 0; i < 12; n += Number(c[i]) * b[++i]);

        n = n % 11;

        if (Number(c[12]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        for (i = 0, n = 0; i <= 12; n += Number(c[i]) * b[i++]);

        n = n % 11;

        if (Number(c[13]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        return true;
    }
}

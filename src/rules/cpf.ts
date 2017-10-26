import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export class Cpf extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 11 || new Regex(RegExp(`${Number(c[0])}{11}`)).validate(c)) {
            return false;
        }

        let i: number;
        let n: number;
        let s: number;

        for (s = 10, n = 0, i = 0; s >= 2; n += Number(c[i++]) * s--);

        n = n % 11;

        if (Number(c[9]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        for (s = 11, n = 0, i = 0; s >= 2; n += Number(c[i++]) * s--);

        n = n % 11;

        if (Number(c[10]) !== ((n < 2) ? 0 : 11 - n)) {
            return false;
        }

        return true;
    }
}

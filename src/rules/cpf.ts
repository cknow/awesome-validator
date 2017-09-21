import { AbstractRule } from './abstract-rule';

export class Cpf extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 11 || RegExp(`${Number(c[0])}{11}`).test(c)) {
            return false;
        }

        let i: number;
        let n: number;
        let d: number;
        let s: number;

        for (s = 10, n = 0, i = 0; s >= 2; n += Number(c[i++]) * s--);

        d = (((n %= 11) < 2) ? 0 : 11 - n);

        if (Number(c[9]) !== d) {
            return false;
        }

        for (s = 11, n = 0, i = 0; s >= 2; n += Number(c[i++]) * s--);

        d = (((n %= 11) < 2) ? 0 : 11 - n);

        if (Number(c[10]) !== d) {
            return false;
        }

        return true;
    }
}

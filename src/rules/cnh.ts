import { AbstractRule } from './abstract-rule';

export class Cnh extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 11 || RegExp(`${Number(c[0])}{11}`).test(c)) {
            return false;
        }

        let i: number;
        let j: number;
        let v: number;
        let dsc: number;
        let x: number;
        let vl1: number;
        let vl2: number;

        for (i = 0, j = 9, v = 0; i < 9; ++i, --j) {
            v += +(Number(c[i]) * j);
        }

        dsc = 0;
        vl1 = v % 11;

        if (vl1 >= 10) {
            vl1 = 0;
            dsc = 2;
        }

        for (i = 0, j = 1, v = 0; i < 9; ++i, ++j) {
            v += +(Number(c[i]) * j);
        }

        x = v % 11;
        vl2 = (x >= 10) ? 0 : x - dsc;

        return `${vl1}${vl2}` === c.substr(-2);
    }
}

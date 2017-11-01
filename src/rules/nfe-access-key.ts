import { AbstractRule } from './abstract-rule';

export class NfeAccessKey extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const c: string = String(input).replace(/[^\d]/g, '');

        if (c.length !== 44 || RegExp(`${Number(c[0])}{44}`).test(c)) {
            return false;
        }

        const w: number[] = [];

        let i: number;
        let z: number;
        let m: number;

        for (i = 0, z = 5, m = 43; i <= m; ++i) {
            z = (i < m) ? (z - 1) === 1 ? 9 : (z - 1) : 0;
            w.push(z);
        }

        for (i = 0, z = 0, m = 44; i < m; ++i) {
            z += Number(c[i]) * w[i];
        }

        z -= (Math.floor(z / 11) * 11);

        return ((z === 0 || z === 1) ? 0 : (11 - z)) === Number(c[43]);
    }
}

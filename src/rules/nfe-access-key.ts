import { AbstractCalculation } from './abstract-calculation';

export class NfeAccessKey extends AbstractCalculation {

    /**
     * Get Length.
     */
    protected getLength(): number {
        return 44;
    }

    /**
     * Validate Calculation.
     */
    protected validateCalculation(input: string): boolean {
        const w: number[] = [];

        let i: number;
        let z: number;
        let m: number;

        for (i = 0, z = 5, m = 43; i <= m; ++i) {
            z = (i < m) ? (z - 1) === 1 ? 9 : (z - 1) : 0;
            w.push(z);
        }

        for (i = 0, z = 0, m = 44; i < m; ++i) {
            z += Number(input[i]) * w[i];
        }

        z -= (Math.floor(z / 11) * 11);

        return ((z === 0 || z === 1) ? 0 : (11 - z)) === Number(input[43]);
    }
}

export default NfeAccessKey;

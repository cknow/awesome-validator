import { NumberVal } from './number-val';

export class PrimeNumber extends NumberVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!super.validate(input) || input <= 1) {
            return false;
        }

        if (input !== 2 && (input % 2) === 0) {
            return false;
        }

        for (let i: number = 3; i <= Math.ceil(Math.sqrt(input)); i += 2) {
            if ((input % i) === 0) {
                return false;
            }
        }

        return true;
    }
}

export default PrimeNumber;

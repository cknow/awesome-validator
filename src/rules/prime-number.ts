import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';

export class PrimeNumber extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new NumberVal().validate(input) || input <= 1) {
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

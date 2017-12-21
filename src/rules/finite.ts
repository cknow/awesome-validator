import { NumberVal } from './number-val';

export class Finite extends NumberVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && Number.isFinite(Number(input));
    }
}

import { NumberVal } from './number-val';

export class Positive extends NumberVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && input > 0;
    }
}

export default Positive;

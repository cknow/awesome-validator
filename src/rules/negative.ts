import { NumberVal } from './number-val';

export class Negative extends NumberVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && input < 0;
    }
}

export default Negative;

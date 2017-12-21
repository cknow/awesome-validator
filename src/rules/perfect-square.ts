import { IntVal } from './int-val';

export class PerfectSquare extends IntVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && Math.floor(Math.sqrt(input)) === Math.sqrt(input);
    }
}

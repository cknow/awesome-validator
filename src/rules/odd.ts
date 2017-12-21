import { IntVal } from './int-val';

export class Odd extends IntVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && input % 2 !== 0;
    }
}

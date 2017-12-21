import { IntVal } from './int-val';

export class Even extends IntVal {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && input % 2 === 0;
    }
}

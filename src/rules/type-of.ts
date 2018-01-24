import { Regex } from './regex';

export class TypeOf extends Regex {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(typeof input);
    }
}

export default TypeOf;

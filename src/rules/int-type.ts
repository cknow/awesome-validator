import { NumberType } from './number-type';

export class IntType extends NumberType {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) && input % 1 === 0;
    }
}

import { TypeOf } from './type-of';

export class NumberType extends TypeOf {

    /**
     * Pattern.
     */
    protected pattern(): string | RegExp {
        return /number/;
    }
}

import { TypeOf } from './type-of';

export class BooleanType extends TypeOf {

    /**
     * Pattern.
     */
    protected pattern(): string | RegExp {
        return /boolean/;
    }
}

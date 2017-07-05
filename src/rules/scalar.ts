import { TypeOf } from './type-of';

export class Scalar extends TypeOf {

    /**
     * Pattern.
     */
    protected pattern(): string | RegExp {
        return /boolean|number|string/;
    }
}

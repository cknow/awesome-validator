import { TypeOf } from './type-of';

export class StringType extends TypeOf {

    /**
     * Pattern.
     */
    protected pattern(): string | RegExp {
        return /string/;
    }
}

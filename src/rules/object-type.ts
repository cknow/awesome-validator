import { TypeOf } from './type-of';

export class ObjectType extends TypeOf {

    /**
     * Pattern.
     */
    protected pattern(): string | RegExp {
        return /object/;
    }
}

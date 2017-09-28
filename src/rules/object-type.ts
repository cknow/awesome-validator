import { TypeOf } from './type-of';

export class ObjectType extends TypeOf {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /object/;
    }
}

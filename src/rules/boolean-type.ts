import { TypeOf } from './type-of';

export class BooleanType extends TypeOf {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /boolean/i;
    }
}

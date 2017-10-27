import { TypeOf } from './type-of';

export class NumberType extends TypeOf {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /number/i;
    }
}

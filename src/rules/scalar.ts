import { TypeOf } from './type-of';

export class Scalar extends TypeOf {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /boolean|number|string/i;
    }
}

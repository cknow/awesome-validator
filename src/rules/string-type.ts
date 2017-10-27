import { TypeOf } from './type-of';

export class StringType extends TypeOf {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /string/i;
    }
}

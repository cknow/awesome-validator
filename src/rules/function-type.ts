import { TypeOf } from './type-of';

export class FunctionType extends TypeOf {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /function/i;
    }
}

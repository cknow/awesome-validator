import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { In } from './in';

export class FalseVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new In([0, false, 'off', 'no', 'n', ''], false);
    }
}

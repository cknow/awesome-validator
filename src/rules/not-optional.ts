import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { In } from './in';
import { Not } from './not';

export class NotOptional extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new Not(new In(['', null, undefined], false));
    }
}

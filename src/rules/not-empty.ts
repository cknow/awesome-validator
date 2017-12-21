import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { Empty } from './empty';
import { Not } from './not';

export class NotEmpty extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new Not(new Empty());
    }
}

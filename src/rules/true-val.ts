import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { In } from './in';

export class TrueVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new In([1, true, 'on', 'yes', 'y', 's'], false);
    }
}

export default TrueVal;

import { AbstractWrapper } from './abstract-wrapper';
import { In } from './in';

export class Optional extends AbstractWrapper {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new In([null, ''], false).validate(input) || super.validate(input);
    }
}

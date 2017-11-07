
import { AbstractWrapper } from './abstract-wrapper';
import { NotOptional } from './not-optional';

export class Optional extends AbstractWrapper {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !new NotOptional().validate(input) || super.validate(input);
    }
}

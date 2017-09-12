import { Validatable } from '../validatable';

export abstract class AbstractRule implements Validatable {

    /**
     * Validate.
     */
    public abstract validate(input: any): boolean;
}

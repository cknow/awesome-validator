import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AllOf } from './all-of';
import { Contains } from './contains';
import { Not } from './not';
import { Regex } from './regex';

export class Slug extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AllOf(
            new Not(new Contains('--')),
            new Regex(/^[0-9a-z\-]+$/),
            new Not(new Regex(/^-|-$/))
        );
    }
}

export default Slug;

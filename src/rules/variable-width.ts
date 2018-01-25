
import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AllOf } from './all-of';
import { FullWidth } from './full-width';
import { HalfWidth } from './half-width';

export class VariableWidth extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AllOf(new FullWidth(), new HalfWidth());
    }
}

export default VariableWidth;

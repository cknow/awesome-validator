import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { InstanceOf } from './instance-of';

export class ArrayInstance extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new InstanceOf(Array);
    }
}

import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { InstanceOf } from './instance-of';

export class ObjectInstance extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new InstanceOf(Object);
    }
}

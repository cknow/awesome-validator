import { AbstractRule } from './abstract-rule';
import { InstanceOf } from './instance-of';

export class ArrayInstance extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new InstanceOf(Array).validate(input);
    }
}

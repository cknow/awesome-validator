import { AbstractRule } from './abstract-rule';
import { InstanceOf } from './instance-of';

export class ObjectInstance extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new InstanceOf(Object).validate(input);
    }
}

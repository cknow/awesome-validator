import { AbstractRule } from './abstract-rule';
import { InstanceOf } from './instance-of';

export class RegexInstance extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new InstanceOf(RegExp).validate(input);
    }
}

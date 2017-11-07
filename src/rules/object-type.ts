import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class ObjectType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/object/i).validate(input);
    }
}

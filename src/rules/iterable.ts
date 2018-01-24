import { AbstractRule } from './abstract-rule';
import { ObjectTypeStrict } from './object-type-strict';

export class Iterable extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        let iterableInput: any = input;

        if (new ObjectTypeStrict().validate(input)) {
            iterableInput = Array.from(input);
        }

        return Symbol.iterator in Object(iterableInput);
    }
}

export default Iterable;

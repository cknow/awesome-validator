import { AbstractRule } from './abstract-rule';

export class Iterable extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return Symbol.iterator in Object(input);
    }
}

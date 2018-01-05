import { AbstractRule } from './abstract-rule';

export class ArrayVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return Array.isArray(input) || input instanceof Set || input instanceof Map;
    }
}

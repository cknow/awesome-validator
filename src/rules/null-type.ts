import { AbstractRule } from './abstract-rule';

export class NullType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return input === null;
    }
}

export default NullType;

import { AbstractRule } from './abstract-rule';

export class AlwaysInvalid extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return false;
    }
}

export default AlwaysInvalid;

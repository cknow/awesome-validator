import { AbstractRule } from './abstract-rule';

export class AlwaysValid extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return true;
    }
}

export default AlwaysValid;

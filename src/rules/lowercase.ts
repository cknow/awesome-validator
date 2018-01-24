import { AbstractRule } from './abstract-rule';

export class Lowercase extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return input === String(input).toLocaleLowerCase();
    }
}

export default Lowercase;

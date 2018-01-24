import { AbstractRule } from './abstract-rule';

export class Uppercase extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return input === String(input).toLocaleUpperCase();
    }
}

export default Uppercase;

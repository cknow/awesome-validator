import { AbstractRule } from './abstract-rule';

export class IntVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        /* tslint:disable no-eval */
        return !isNaN(input) && String(eval(input)).length === parseInt(eval(input), 10).toString().length;
        /* tslint:enable no-eval */
    }
}

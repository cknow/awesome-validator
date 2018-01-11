import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export class Base extends AbstractRule {

    /**
     * Base.
     */
    public constructor(
        protected readonly base?: number,
        protected readonly chars: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new Regex(`^[${this.chars.substr(0, this.base)}]+$`).validate(input);
    }
}

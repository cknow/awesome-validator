import { AbstractRule } from './abstract-rule';

export class Even extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return Number(input) % 2 === 0;
    }
}

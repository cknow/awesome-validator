import { AbstractRule } from './abstract-rule';

export class Slug extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const s: string = String(input);

        if (s.indexOf('--') !== -1) {
            return false;
        }

        if (!/^[0-9a-z\-]+$/.test(s)) {
            return false;
        }

        if (/^-|-$/.test(s)) {
            return false;
        }

        return true;
    }
}

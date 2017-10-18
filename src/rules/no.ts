import { Regex } from './regex';

export class No extends Regex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^n(o(t|pe)?|ix|ay)?$/i;
    }
}

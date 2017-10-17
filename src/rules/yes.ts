import { Regex } from './regex';

export class Yes extends Regex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^y(eah?|ep|es)?$/i;
    }
}

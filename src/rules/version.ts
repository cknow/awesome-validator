import { Regex } from './regex';

export class Version extends Regex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[0-9]+\.[0-9]+\.[0-9]+([+-][^+-][0-9A-Za-z-.]*)?$/;
    }
}

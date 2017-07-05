import { Regex } from './regex';

export class Version extends Regex {

    /**
     * Pattern.
     */
    protected pattern(): string | RegExp {
        return /^[0-9]+\.[0-9]+\.[0-9]+([+-][^+-][0-9A-Za-z-.]*)?$/;
    }
}

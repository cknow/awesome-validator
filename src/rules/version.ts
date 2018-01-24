import { AbstractRegex } from './abstract-regex';

export class Version extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[0-9]+\.[0-9]+\.[0-9]+([+-][^+-][0-9a-z-.]*)?$/i;
    }
}

export default Version;

import { AbstractRegexFilter } from './abstract-regex-filter';

export class Multibyte extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /[^\x00-\x7F]/;
    }
}

export default Multibyte;

import { AbstractRegexFilter } from './abstract-regex-filter';

export class Xdigit extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[A-Fa-f\d]+$/g;
    }
}

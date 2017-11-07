import { AbstractRegexFilter } from './abstract-regex-filter';

export class Prnt extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[\u0020-\u007E]+$/g;
    }
}

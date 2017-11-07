import { AbstractRegexFilter } from './abstract-regex-filter';

export class Punct extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g;
    }
}

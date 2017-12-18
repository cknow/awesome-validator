import { AbstractRegexFilter } from './abstract-regex-filter';

export class Graph extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[\u0021-\u007E]+$/g;
    }
}

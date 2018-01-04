import { AbstractRegexFilter } from './abstract-regex-filter';

export class Alnum extends AbstractRegexFilter {

    /**
     * Filter white sapce.
     */
    protected filterWhiteSpace(): boolean {
        return true;
    }

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[a-z\d]+$/gi;
    }
}

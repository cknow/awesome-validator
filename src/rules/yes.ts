import { AbstractRegexFilter } from './abstract-regex-filter';

export class Yes extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^y(eah?|ep|es)?$/i;
    }
}

export default Yes;

import { AbstractRegexFilter } from './abstract-regex-filter';

export class SurrogatePair extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
    }
}

export default SurrogatePair;

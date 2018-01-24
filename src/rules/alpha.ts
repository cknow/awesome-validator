import { AbstractRegexFilter } from './abstract-regex-filter';

export class Alpha extends AbstractRegexFilter {

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
        return /^[a-z]+$/gi;
    }
}

export default Alpha;

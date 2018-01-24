import { AbstractRegexFilter } from './abstract-regex-filter';

export class Digit extends AbstractRegexFilter {

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
        return /^[\d]+$/g;
    }
}

export default Digit;

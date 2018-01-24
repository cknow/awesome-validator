import { AbstractRegexFilter } from './abstract-regex-filter';

export class Xdigit extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[a-f\d]+$/gi;
    }
}

export default Xdigit;

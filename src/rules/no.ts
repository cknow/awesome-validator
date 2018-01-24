import { AbstractRegexFilter } from './abstract-regex-filter';

export class No extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^n(o(t|pe)?|ix|ay)?$/i;
    }
}

export default No;

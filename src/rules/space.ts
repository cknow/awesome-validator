import { AbstractRegexFilter } from './abstract-regex-filter';

export class Space extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[\f\n\r\t\v ]+$/g;
    }
}

export default Space;

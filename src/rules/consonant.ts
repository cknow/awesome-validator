import { AbstractRegexFilter } from './abstract-regex-filter';

export class Consonant extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^(\s|[bcdfghjklmnpqrstvwxyz])*$/i;
    }
}

export default Consonant;

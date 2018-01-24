import { AbstractRegexFilter } from './abstract-regex-filter';

export class Cntrl extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[\u0000-\u001F\u007F]+$/g;
    }
}

export default Cntrl;

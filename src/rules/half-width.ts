import { AbstractRegexFilter } from './abstract-regex-filter';

export class HalfWidth  extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    }
}

export default HalfWidth;

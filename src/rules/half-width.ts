import { AbstractRegex } from './abstract-regex';

export class HalfWidth  extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
    }
}

export default HalfWidth;

import { AbstractRegex } from './abstract-regex';

export class Label extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[a-z_\x7f-\xff][a-z0-9_\x7f-\xff]*$/i;
    }
}

export default Label;

import { AbstractRegex } from './abstract-regex';

export class Isrc extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
    }
}

export default Isrc;

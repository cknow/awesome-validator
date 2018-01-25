import { AbstractRegex } from './abstract-regex';

export class HexRgbColor extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
    }
}

export default HexRgbColor;

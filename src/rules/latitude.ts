import { AbstractRegex } from './abstract-regex';

export class Latitude extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
    }
}

export default Latitude;

import { AbstractRegex } from './abstract-regex';

export class MacAddress extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^(([0-9a-f]{2}-){5}|([0-9a-f]{2}:){5})[0-9a-f]{2}$/i;
    }
}

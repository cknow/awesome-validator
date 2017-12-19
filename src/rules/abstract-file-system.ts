import { existsSync, Stats, statSync } from 'fs';

import { AbstractRule } from './abstract-rule';

export abstract class AbstractFileSystem extends AbstractRule {

    /**
     * Stats.
     */
    public static stats: Stats;

    /**
     * Parse.
     */
    public static parse(input: any): Stats | null {
        try {
            if (input instanceof Stats) {
                return input;
            }

            if (existsSync(input)) {
                return statSync(input);
            }
        } catch (e) {}

        return null;
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const stats: Stats | null = AbstractFileSystem.parse(input);

        if (stats === null) {
            return false;
        }

        AbstractFileSystem.stats = stats;

        return this.validateFileSystem(stats);
    }

    /**
     * Validate File System.
     */
    protected abstract validateFileSystem(stas: Stats): boolean;
}

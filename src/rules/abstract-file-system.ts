import { existsSync, Stats, statSync } from 'fs';

import { AbstractTryCatch } from './abstract-try-catch';

export abstract class AbstractFileSystem extends AbstractTryCatch {

    /**
     * Stats.
     */
    public static stats: Stats;

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        if (input instanceof Stats) {
            AbstractFileSystem.stats = input;

            return this.validateFileSystem(AbstractFileSystem.stats);
        }

        if (existsSync(input)) {
            AbstractFileSystem.stats = statSync(input);

            return this.validateFileSystem(AbstractFileSystem.stats);
        }

        return false;
    }

    /**
     * Validate File System.
     */
    protected abstract validateFileSystem(stats: Stats): boolean;
}

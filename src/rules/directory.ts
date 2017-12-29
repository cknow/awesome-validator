import { Stats } from 'fs';

import { AbstractFileSystem } from './abstract-file-system';

export class Directory extends AbstractFileSystem {

    /**
     * Validate File System.
     */
    protected validateFileSystem(stats: Stats): boolean {
        return stats.isDirectory();
    }
}

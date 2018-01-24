import { Stats } from 'fs';

import { AbstractFileSystem } from './abstract-file-system';

export class File extends AbstractFileSystem {

    /**
     * Validate File System.
     */
    protected validateFileSystem(stats: Stats): boolean {
        return stats.isFile();
    }
}

export default File;

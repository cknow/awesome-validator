import { Stats } from 'fs';

import { File } from './file';

export class Executable extends File {

    /**
     * Validate File System.
     */
    protected validateFileSystem(s: Stats): boolean {
        if (!super.validateFileSystem(s)) {
            return false;
        }

        /* tslint:disable no-bitwise */
        /* istanbul ignore next */
        return Boolean(
            (process.platform === 'win32') ||
            (s.mode & parseInt('0001', 8)) ||
            ((s.mode & parseInt('0010', 8)) && (s.gid ? process.getgid && s.gid === process.getgid() : true)) ||
            ((s.mode & parseInt('0100', 8)) && (s.uid ? process.getuid && s.uid === process.getuid() : true))
        );
        /* tslint:enable no-bitwise */
    }
}

export default Executable;

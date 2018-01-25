import { AbstractServiceRegex } from './abstract-service-regex';

export class Hash extends AbstractServiceRegex {

    /**
     * Services.
     */
    protected get services(): Map<string, RegExp> {
        return new Map([
            ['md5', /^[a-f0-9]{32}$/],
            ['md4', /^[a-f0-9]{32}$/],
            ['sha1', /^[a-f0-9]{40}$/],
            ['sha256', /^[a-f0-9]{64}$/],
            ['sha384', /^[a-f0-9]{96}$/],
            ['sha512', /^[a-f0-9]{128}$/],
            ['ripemd128', /^[a-f0-9]{32}$/],
            ['ripemd160', /^[a-f0-9]{40}$/],
            ['tiger128', /^[a-f0-9]{32}$/],
            ['tiger160', /^[a-f0-9]{40}$/],
            ['tiger192', /^[a-f0-9]{48}$/],
            ['crc32', /^[a-f0-9]{8}$/],
            ['crc32b', /^[a-f0-9]{8}$/]
        ]);
    }
}

export default Hash;

import { AbstractRegex } from './abstract-regex';

export class DataUri extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        /* tslint:disable max-line-length */
        return /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i;
        /* tslint:enable max-line-length */
    }
}

export default DataUri;

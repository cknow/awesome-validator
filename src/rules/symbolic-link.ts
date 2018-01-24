import * as nodeURL from 'url';

import { AbstractTryCatch } from './abstract-try-catch';

export class SymbolicLink extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        let url: any;

        try {
            url = new nodeURL.URL(input);
        } catch (e) {
            url = new URL(input);
        }

        return String(url).length > 0;
    }
}

export default SymbolicLink;

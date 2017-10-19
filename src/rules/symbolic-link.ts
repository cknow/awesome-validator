import * as nodeURL from 'url';

import { AbstractRule } from './abstract-rule';

export class SymbolicLink extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            let url: any;

            try {
                url = new nodeURL.URL(input);
            } catch (e) {
                url = new URL(input);
            }

            return String(url).length > 0;
        } catch (e) {
        }

        return false;
    }
}

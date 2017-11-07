import { AbstractRegex } from './abstract-regex';

export class Phone extends AbstractRegex {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        /* tslint:disable max-line-length */
        return /^\+?(\d{0,3})? ?((?=\()(\(\d{1,3}\) ?((\d{3,5})[. -]?(\d{4})|(\d{2}[. -]?){4}))|([. -]?(\d{1,3}[. -]*)?((\d{3,5})[. -]?(\d{4})|(\d{2}[. -]?){4})))$/;
        /* tslint:enable max-line-length */
    }
}

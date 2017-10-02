import { AbstractSearcher } from './abstract-searcher';

export class TrueVal extends AbstractSearcher {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.validateSearcher([1, '1', true, 'true', 'on', 'yes', 'y', 's'], input);
    }
}

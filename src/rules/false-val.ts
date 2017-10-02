import { AbstractSearcher } from './abstract-searcher';

export class FalseVal extends AbstractSearcher {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.validateSearcher([0, '0', false, 'false', 'off', 'no', 'n', ''], input);
    }
}

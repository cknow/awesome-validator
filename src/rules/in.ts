import { AbstractSearcher } from './abstract-searcher';

export class In extends AbstractSearcher {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.validateSearcher(this.searcher, input);
    }
}

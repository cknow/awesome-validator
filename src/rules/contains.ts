import { AbstractSearcher } from './abstract-searcher';

export class Contains extends AbstractSearcher {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.validateSearcher(input, this.searcher);
    }
}

export default Contains;

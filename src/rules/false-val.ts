import { In } from './in';

export class FalseVal extends In {

    /**
     * Get searcher.
     */
    protected getSearcher(): any[] {
        return [0, '0', false, 'false', 'off', 'no', 'n', ''];
    }
}

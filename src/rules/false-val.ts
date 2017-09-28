import { In } from './in';

export class FalseVal extends In {

    /**
     * Get haystack.
     */
    protected getHaystack(): any[] {
        return [0, '0', false, 'false', 'off', 'no', 'n', ''];
    }
}

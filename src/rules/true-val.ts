import { In } from './in';

export class TrueVal extends In {

    /**
     * Get haystack.
     */
    protected getHaystack(): any[] {
        return [1, '1', true, 'true', 'on', 'yes', 'y', 's'];
    }
}

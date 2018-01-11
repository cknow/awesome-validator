import { lookup } from 'mime-types';

import { AbstractServiceList } from './abstract-service-list';

export class Mimetype extends AbstractServiceList {

    /**
     * Get item.
     */
    protected getItem(input: any): any {
        return lookup(input);
    }
}

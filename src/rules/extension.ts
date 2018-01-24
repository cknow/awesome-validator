import { AbstractServiceList } from './abstract-service-list';

export class Extension extends AbstractServiceList {

    /**
     * Get item.
     */
    protected getItem(input: any): any {
        return String(input).split('.').pop();
    }
}

export default Extension;

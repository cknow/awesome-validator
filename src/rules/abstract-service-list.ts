import { AbstractServiceArray } from './abstract-service-array';
import { NotEmpty } from './not-empty';
import { StringType } from './string-type';

export abstract class AbstractServiceList extends AbstractServiceArray {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new StringType().validate(input)) {
            return false;
        }

        const item: any = this.getItem(input);

        return new NotEmpty().validate(item) && super.validate(item);
    }

    /**
     * Get item.
     */
    protected abstract getItem(input: any): any;

    /**
     * Services.
     */
    protected get services(): Map<string, any> {
        return new Map<string, any>([
            ['list', this.servicesKey]
        ]);
    }

    /**
     * Services filter.
     */
    protected servicesFilter(value: [string, any]): boolean {
        return true;
    }
}

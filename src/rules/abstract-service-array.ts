import { AbstractServiceFilter } from './abstract-service-filter';
import { In } from './in';

export abstract class AbstractServiceArray extends AbstractServiceFilter<any> {

    /**
     * Validate Service.
     */
    protected validateService(service: any, input: any): boolean {
        return new In(service, false).validate(input);
    }
}

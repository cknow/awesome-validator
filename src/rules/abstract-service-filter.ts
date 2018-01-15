import { AbstractService } from './abstract-service';
import { In } from './in';

export abstract class AbstractServiceFilter<T> extends AbstractService<any, T> {

    /**
     * Services filter.
     */
    protected servicesFilter(value: [string, T]): boolean {
        const regexp: RegExp = /[^a-z\d]/gi;
        const services: string[] = this.servicesKey.map((service: string): string => service.replace(regexp, ''));

        return new In(services, false).validate(value[0].replace(regexp, ''));
    }
}

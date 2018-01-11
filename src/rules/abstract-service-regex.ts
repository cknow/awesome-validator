import { AbstractServiceFilter } from './abstract-service-filter';
import { Regex } from './regex';

export abstract class AbstractServiceRegex extends AbstractServiceFilter<RegExp> {

    /**
     * Validate Service.
     */
    protected validateService(service: RegExp, input: any): boolean {
        return new Regex(service).validate(input);
    }
}

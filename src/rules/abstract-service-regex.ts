import { AbstractService } from './abstract-service';
import { Regex } from './regex';

export abstract class AbstractServiceRegex extends AbstractService<string, RegExp> {

    /**
     * Validate Service.
     */
    protected validateService(service: RegExp, input: any): boolean {
        return new Regex(service).validate(input);
    }
}

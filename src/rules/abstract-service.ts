import { AbstractRule } from './abstract-rule';

export abstract class AbstractService<Key, Value> extends AbstractRule {

    /**
     * Service.
     */
    public constructor(public readonly serviceKey?: Key) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const serviceValue: Value | undefined = this.serviceKey ? this.services.get(this.serviceKey) : undefined;

        if (serviceValue !== undefined) {
            return this.validateService(serviceValue, input);
        }

        for (const service of Array.from(this.services.values())) {
            if (this.validateService(service, input)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Services.
     */
    protected abstract get services(): Map<Key, Value>;

    /**
     * Validate Service.
     */
    protected abstract validateService(service: Value, input: any): boolean;
}

import { AbstractRule } from './abstract-rule';

export abstract class AbstractService<Key, Value> extends AbstractRule {

    /**
     * Services key.
     */
    public readonly servicesKey: Key[];

    /**
     * Service.
     */
    public constructor(...servicesKey: Key[]) {
        super();

        this.servicesKey = servicesKey;
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        let services: [Key, Value][] = Array.from(this.services).filter(
            (value: [Key, Value]) => this.servicesFilter(value)
        );

        if (services.length === 0) {
            services = Array.from(this.services);
        }

        for (const service of services) {
            if (this.validateService(service[1], input)) {
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
     * Services filter.
     */
    protected abstract servicesFilter(value: [Key, Value]): boolean;

    /**
     * Validate Service.
     */
    protected abstract validateService(service: Value, input: any): boolean;
}

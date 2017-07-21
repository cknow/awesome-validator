import { AbstractRule } from './abstract-rule';

export class InstanceOf extends AbstractRule {

    /**
     * Instance Of.
     */
    public constructor(public readonly instanceName?: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return input instanceof this.instance();
    }

    /**
     * Instance.
     */
    protected instance(): any {
        if (!this.instanceName) {
            throw new TypeError('Invalid instance name.');
        }

        return this.instanceName;
    }
}

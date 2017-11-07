import { AbstractRule } from './abstract-rule';

export class InstanceOf extends AbstractRule {

    /**
     * Instance Of.
     */
    public constructor(public readonly instanceName: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return input instanceof this.instanceName;
    }
}

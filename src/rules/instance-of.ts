import { AbstractRule } from './abstract-rule';

export class InstanceOf extends AbstractRule {

    /**
     * InstanceOf.
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

export default InstanceOf;

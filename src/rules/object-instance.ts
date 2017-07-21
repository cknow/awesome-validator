import { InstanceOf } from './instance-of';

export class ObjectInstance extends InstanceOf {

    /**
     * Instance.
     */
    protected instance(): any {
        return Object;
    }
}

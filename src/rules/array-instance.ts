import { InstanceOf } from './instance-of';

export class ArrayInstance extends InstanceOf {

    /**
     * Instance.
     */
    protected instance(): any {
        return Array;
    }
}

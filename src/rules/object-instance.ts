import { InstanceOf } from './instance-of';

export class ObjectInstance extends InstanceOf {

    /**
     * Get instance.
     */
    protected getInstance(): any {
        return Object;
    }
}

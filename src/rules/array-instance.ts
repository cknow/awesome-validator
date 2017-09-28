import { InstanceOf } from './instance-of';

export class ArrayInstance extends InstanceOf {

    /**
     * Get instance.
     */
    protected getInstance(): any {
        return Array;
    }
}

import { InstanceOf } from './instance-of';

export class RegexInstance extends InstanceOf {

    /**
     * Get instance.
     */
    protected getInstance(): any {
        return RegExp;
    }
}

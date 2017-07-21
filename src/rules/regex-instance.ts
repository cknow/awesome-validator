import { InstanceOf } from './instance-of';

export class RegexInstance extends InstanceOf {

    /**
     * Instance.
     */
    protected instance(): any {
        return RegExp;
    }
}

import { AbstractConstructotName } from './abstract-constructor-name';

export class FunctionInstance extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Function';
    }
}

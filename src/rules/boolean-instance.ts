import { AbstractConstructotName } from './abstract-constructor-name';

export class BooleanInstance extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Boolean';
    }
}

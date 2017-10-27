import { AbstractConstructotName } from './abstract-constructor-name';

export class NumberInstance extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Number';
    }
}

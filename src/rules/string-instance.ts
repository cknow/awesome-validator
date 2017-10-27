import { AbstractConstructotName } from './abstract-constructor-name';

export class StringInstance extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'String';
    }
}

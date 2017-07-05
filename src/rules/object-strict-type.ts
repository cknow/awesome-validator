import { AbstractConstructotName } from './abstract-constructor-name';

export class ObjectStrictType extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Object';
    }
}

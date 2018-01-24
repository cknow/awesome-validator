import { AbstractConstructotName } from './abstract-constructor-name';

export class ObjectTypeStrict extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Object';
    }
}

export default ObjectTypeStrict;

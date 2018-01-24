import { AbstractConstructotName } from './abstract-constructor-name';

export class ArrayType extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Array';
    }
}

export default ArrayType;

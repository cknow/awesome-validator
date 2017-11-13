import { AbstractConstructotName } from './abstract-constructor-name';

export class SymbolInstance extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'Symbol';
    }
}

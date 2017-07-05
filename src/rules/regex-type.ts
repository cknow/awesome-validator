import { AbstractConstructotName } from './abstract-constructor-name';

export class RegexType extends AbstractConstructotName {

    /**
     * Get constructor name.
     */
    protected getConstructorName(): string {
        return 'RegExp';
    }
}

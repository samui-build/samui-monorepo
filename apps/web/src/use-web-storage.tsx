import { CoreStorage } from '@samui/ui';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export function useWebAtomStorage<T>({ defaultValue, key }: { defaultValue: T; key: string }): CoreStorage<T> {
    const itemAtom = atomWithStorage<T>(key, defaultValue, undefined, { getOnInit: false });
    const [item, setItem] = useAtom(itemAtom);

    return {
        getValue: () => {
            return new Promise<T>(resolve => {
                resolve(item);
            });
        },
        removeValue: () => {
            return new Promise<void>(resolve => {
                setItem(null as T);
                resolve();
            });
        },
        setValue: (value: T) => {
            return new Promise<void>(resolve => {
                setItem(value);
                resolve();
            });
        },
    };
}

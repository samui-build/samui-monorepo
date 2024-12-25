import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export interface CoreStorage<T> {
    getValue: () => Promise<T>;
    removeValue: () => Promise<void>;
    setValue: (value: T) => Promise<void>;
}

interface StorageType {
    active?: boolean;
    id: string;
    name: string;
}

export function useCoreItemStorage<T extends StorageType>({
    storage,
    storageKey,
}: {
    storage: CoreStorage<T[]>;
    storageKey: string;
}) {
    const query = useQuery({
        queryFn: () => storage.getValue(),
        queryKey: [storageKey],
    });

    const items = useMemo(
        () =>
            (query.data ?? [])
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .sort((a, b) => ((a?.active ?? false) < (b?.active ?? false) ? 1 : -1)),
        [query.data],
    );

    const item = useMemo(() => items.find(i => i.active) ?? items[0], [items]);

    async function findItem(id: string) {
        const found = items.find(i => i.id === id);
        if (!found) throw new Error(`Item with id ${id} not found`);

        return await Promise.resolve(found);
    }

    async function update(items: T[]) {
        await storage.setValue(items);
    }

    async function refresh() {
        await query.refetch();
    }

    const addItemMutation = useMutation({
        mutationFn: async (input: T) => {
            await update([...items, input]);
            await refresh();
        },
        mutationKey: [storageKey, 'addItem', items],
    });

    const deleteItemMutation = useMutation({
        mutationFn: async (input: T) => {
            const found = await findItem(input.id);
            await update(items.filter(i => i.id !== found.id));
            await refresh();
        },
        mutationKey: [storageKey, 'deleteItem', items],
    });

    const selectItemMutation = useMutation({
        mutationFn: async (input: T) => {
            const found = await findItem(input.id);
            await update(items.map(i => ({ ...i, active: i.id === found.id })));
            await refresh();
        },
        mutationKey: [storageKey, 'selectItem', items],
    });

    const updateItemMutation = useMutation({
        mutationFn: async (input: T) => {
            const found = await findItem(input.id);
            await update([...items.filter(i => i.id !== input.id), { ...found, ...input }]);
            await refresh();
        },
        mutationKey: [storageKey, 'updateItem', items],
    });

    return {
        addItem: async (input: T) => await addItemMutation.mutateAsync(input),
        deleteItem: async (input: T) => await deleteItemMutation.mutateAsync(input),
        item,
        items,
        loading: query.isLoading,
        refresh,
        selectItem: async (input: T) => await selectItemMutation.mutateAsync(input),
        updateItem: async (input: T) => await updateItemMutation.mutateAsync(input),
    };
}

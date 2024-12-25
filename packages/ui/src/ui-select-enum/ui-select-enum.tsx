import { MultiSelect, MultiSelectProps, Select, SelectProps } from '@mantine/core';
import React from 'react';

export function UiMultiSelectEnum<T extends string>({
    values,
    setValues,
    options,
    ...props
}: MultiSelectProps & {
    options: { label: string; value: string }[];
    setValues: (values: T[] | undefined) => void;
    values: T[] | undefined;
}) {
    return (
        <MultiSelect
            value={values?.map(v => `${v}`) ?? []}
            onChange={values => setValues(values.map(v => v as T))}
            data={options}
            {...props}
        />
    );
}

export function UiSelectEnum<T>({
    value,
    setValue,
    options,
    ...props
}: SelectProps & {
    options: { label: string; value: string }[];
    setValue: (value: T | undefined) => void;
    value: T | undefined;
}) {
    return (
        <Select
            value={value?.toString() ?? ''}
            onChange={value => setValue(value === '' ? undefined : (value as T))}
            data={options}
            {...props}
        />
    );
}

export function getEnumOptions<T extends Record<string, string>>(
    enumObject: T,
): { label: string; value: T[keyof T] }[] {
    return Object.keys(enumObject).map((key: string) => ({
        label: key,
        value: enumObject[key as keyof T],
    }));
}

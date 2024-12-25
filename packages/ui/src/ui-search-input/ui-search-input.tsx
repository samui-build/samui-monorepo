import { ActionIcon, ActionIconProps, rem, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import React from 'react';

export function UiSearchInput({
    ...props
}: {
    icon?: ActionIconProps;
    text?: TextInputProps;
} = {}) {
    const theme = useMantineTheme();
    return (
        <TextInput
            leftSection={<IconSearch style={{ height: rem(18), width: rem(18) }} stroke={1.5} />}
            rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" {...props.icon}>
                    <IconArrowRight style={{ height: rem(18), width: rem(18) }} stroke={1.5} />
                </ActionIcon>
            }
            radius="xl"
            variant="filled"
            size="md"
            placeholder="Search"
            {...props.text}
        />
    );
}

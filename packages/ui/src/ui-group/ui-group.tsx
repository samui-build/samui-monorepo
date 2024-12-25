import { Group, GroupProps } from '@mantine/core';
import React, { ReactNode } from 'react';

export interface UiGroupProps extends GroupProps {
    children: ReactNode;
}

export function UiGroup({ children, ...props }: UiGroupProps) {
    return (
        <Group justify="space-between" {...props}>
            {children}
        </Group>
    );
}

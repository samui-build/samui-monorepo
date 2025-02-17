import { Title, TitleProps } from '@mantine/core';
import React, { ReactNode } from 'react';

export function UiCardTitle({
    children,
    ...props
}: TitleProps & {
    children: ReactNode;
}) {
    return (
        <Title order={3} {...props}>
            {children}
        </Title>
    );
}

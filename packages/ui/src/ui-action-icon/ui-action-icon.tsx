import { ActionIcon, ActionIconProps } from '@mantine/core';
import React from 'react';

import { UiIcon } from '../ui-footer';

export function UiActionIcon({
    icon: Icon,
    onClick,
    ...props
}: ActionIconProps & {
    icon: UiIcon;
    onClick: () => void;
}) {
    return (
        <ActionIcon onClick={onClick} size="lg" variant="light" {...props}>
            <Icon />
        </ActionIcon>
    );
}

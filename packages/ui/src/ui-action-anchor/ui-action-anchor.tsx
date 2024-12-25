import { ActionIcon, type ActionIconProps } from '@mantine/core';
import { IconMaximize } from '@tabler/icons-react';
import React from 'react';

import { UiIcon } from '../ui-footer';

export function UiActionAnchor({
    icon: Icon,
    target,
    href,
    ...props
}: ActionIconProps & { href: string; icon: UiIcon; target: string }) {
    return (
        <ActionIcon component="a" href={href} target={target} size="lg" variant="light" {...props}>
            <Icon />
        </ActionIcon>
    );
}

export function UiActionAnchorMaximize({ href, ...props }: ActionIconProps & { href: string }) {
    return <UiActionAnchor href={href} icon={IconMaximize} target="fullscreen" {...props} />;
}

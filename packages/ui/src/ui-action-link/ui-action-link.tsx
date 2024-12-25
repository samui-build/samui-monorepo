import { ActionIcon, ActionIconProps } from '@mantine/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { UiIcon } from '../ui-footer';

export function UiActionLink({ icon: Icon, to, ...props }: ActionIconProps & { icon: UiIcon; to: string }) {
    const location = useLocation();
    const active = location.pathname.startsWith(to);
    return (
        <ActionIcon component={Link} to={to} size="lg" variant={active ? 'filled' : 'light'} {...props}>
            <Icon />
        </ActionIcon>
    );
}

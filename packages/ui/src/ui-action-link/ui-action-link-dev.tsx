import { ActionIconProps } from '@mantine/core';
import { IconBug } from '@tabler/icons-react';
import React from 'react';

import { UiActionLink } from './ui-action-link';

export function UiActionLinkDev({ to = '/dev', ...props }: ActionIconProps & { to?: string }) {
    return <UiActionLink to={to} icon={IconBug} {...props} />;
}

import { ActionIconProps } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import React from 'react';

import { UiActionLink } from './ui-action-link';

export function UiActionLinkSettings({ to = '/settings', ...props }: ActionIconProps & { to?: string }) {
    return <UiActionLink to={to} icon={IconSettings} {...props} />;
}

import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IconBug } from '@tabler/icons-react';
import React from 'react';

import { UiDebug } from './ui-debug';

export function handleDebugModalClick({ data, title }: { data: object | string; title?: string }) {
    return modals.open({
        children: <UiDebug data={data} open hideButton />,
        size: 'lg',
        title: title ?? 'Debug',
    });
}

export function UiDebugModal({ data, title, ...props }: ActionIconProps & { data: object | string; title?: string }) {
    return (
        <Tooltip label="Show debug data">
            <ActionIcon
                color="brand"
                variant="light"
                size="sm"
                onClick={() => handleDebugModalClick({ data, title })}
                {...props}
            >
                <IconBug size={16} />
            </ActionIcon>
        </Tooltip>
    );
}

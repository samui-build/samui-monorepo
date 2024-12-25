import { ActionIcon, ActionIconProps, CopyButton, Menu, MenuItemProps, rem, Tooltip } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import React, { CSSProperties } from 'react';

import { toastSuccess } from '../ui-toast';

export function UiCopy({ text, tooltip, ...props }: ActionIconProps & { text: string; tooltip?: string }) {
    return (
        <CopyButton value={text} timeout={2000}>
            {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied' : (tooltip ?? 'Copy')} withArrow position="top">
                    <ActionIcon variant="light" size="sm" color={copied ? 'green' : 'brand'} onClick={copy} {...props}>
                        {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                    </ActionIcon>
                </Tooltip>
            )}
        </CopyButton>
    );
}

export function UiCopyMenuItem({
    label,
    value,
    style = { height: rem(14), width: rem(14) },
    ...props
}: MenuItemProps & {
    label: string;
    style?: CSSProperties;
    value: string;
}) {
    return (
        <CopyButton value={value} timeout={2000}>
            {({ copy }) => (
                <Menu.Item
                    closeMenuOnClick
                    leftSection={<IconCopy style={style} />}
                    onClick={() => {
                        copy();
                        toastSuccess(`Copied ${label}`);
                    }}
                    {...props}
                >
                    Copy {label}
                </Menu.Item>
            )}
        </CopyButton>
    );
}

import { Anchor, Group, Text, useMantineTheme } from '@mantine/core';
import React, { ComponentType } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useUi } from '../ui-provider';

export type UiIcon = ComponentType<{
    size?: number | string;
    stroke?: number | string;
    title?: string;
}>;

export interface UiFooterLink {
    icon: UiIcon;
    label: string;
    to: string;
}

export function UiFooter({ links }: { links: UiFooterLink[] }) {
    const location = useLocation();
    const { colors } = useMantineTheme();
    const { isDark } = useUi();
    const bg = isDark ? colors.dark[9] : colors.gray[1];

    return (
        <Group justify="space-between" align="center" h="100%" px="sm" bg={bg}>
            {links.map(({ label, icon: Icon, to }) => {
                const active = location.pathname.startsWith(to);
                return (
                    <Anchor
                        flex={1}
                        component={Link}
                        to={to}
                        key={to}
                        bg={active ? (isDark ? 'dark' : 'white') : undefined}
                        underline="hover"
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Icon size={28} />
                        <Text size="xs">{label}</Text>
                    </Anchor>
                );
            })}
        </Group>
    );
}

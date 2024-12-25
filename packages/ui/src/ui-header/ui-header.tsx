import { Anchor, Group, useMantineTheme } from '@mantine/core';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { UiLogo, UiLogoType } from '../ui-logo';
import { useUi } from '../ui-provider';
import { useUiBreakpoints } from '../ui-theme';

export function UiHeader({ actions = <div /> }: { actions?: ReactNode }) {
    const { colors } = useMantineTheme();
    const { isDark } = useUi();
    const { isXs } = useUiBreakpoints();
    const bg = isDark ? colors.dark[9] : colors.gray[1];

    return (
        <Group justify="space-between" align="center" h="100%" p="sm" bg={bg}>
            <Anchor component={Link} to="/" display="flex">
                {isXs ? <UiLogo height={28} /> : <UiLogoType height={28} />}
            </Anchor>
            <Group gap="xs">{actions}</Group>
        </Group>
    );
}

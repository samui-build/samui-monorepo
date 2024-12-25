import { Box, Flex } from '@mantine/core';
import { UiFooter, UiFooterLink, UiHeader } from '@samui/ui';
import { ReactNode } from 'react';

interface WebLayoutProps {
    children?: ReactNode;
    footerLinks: UiFooterLink[];
    headerActions?: ReactNode;
}

export function WebLayout({ children, headerActions, footerLinks }: WebLayoutProps) {
    return (
        <Flex direction="column" h="100%">
            <Box>
                <UiHeader actions={headerActions} />
            </Box>
            <Box component="main" style={{ flexGrow: 1, height: '100%', overflow: 'auto' }}>
                {children}
            </Box>
            <Box>
                <UiFooter links={footerLinks} />
            </Box>
        </Flex>
    );
}

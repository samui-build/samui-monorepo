import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function useUiBreakpoints() {
    const { breakpoints } = useMantineTheme();
    const isMd = useMediaQuery(`(max-width: ${breakpoints.md})`);
    const isSm = useMediaQuery(`(max-width: ${breakpoints.sm})`);
    const isXs = useMediaQuery(`(max-width: 200px)`);

    return {
        isMd: isMd ?? false,
        isSm: isSm ?? false,
        isXs: isXs ?? false,
    };
}

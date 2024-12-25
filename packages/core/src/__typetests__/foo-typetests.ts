import { getExplorerPath } from '../get-explorer-path';
import { getExplorerUrl } from '../get-explorer-url';

// [DESCRIBE] foo
{
    {
        const result: string = getExplorerPath('some-path');
        result satisfies string;
    }
    {
        const result: string = getExplorerUrl('some-path', 'custom');
        result satisfies string;
    }
}

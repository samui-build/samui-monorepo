import { cli } from '../cli-command';
import { getEnvironment } from './lib/get-environment';

export const environmentCommand = cli
    .baseCommand('env')
    .description('Get cli environment options')
    .withSolanaConfigOptions()
    .action(options => {
        const env = getEnvironment(options);
        Object.entries(env).forEach(([key, value]) => {
            console.log(`${key}=${value}`);
        });
        process.exit(0);
    });

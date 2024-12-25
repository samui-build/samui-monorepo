import { exec } from 'node:child_process';

import { cli } from '../cli-command';

export const validatorCommand = cli
    .baseCommand('validator')
    .alias('v')
    .description('Run validator')
    .action(runDockerContainer);

export function runDockerContainer() {
    const containerName = 'samui-test-validator';
    const containerParams = '-it -p 8899:8899 -p 8900:8900 --rm';
    // TODO: Add support for custom validator user and repo
    const dockerUser = 'ghcr.io/samui-build';
    const dockerRepo = 'samui-test-validator';
    // TODO: Add support for custom validator tag
    const dockerTag = 'latest';
    const command = `docker run ${containerParams} --name ${containerName} ${dockerUser}/${dockerRepo}:${dockerTag}`;

    const run = exec(command);

    run.stdout?.on('data', data => {
        console.log(`stdout: ${data}`);
    });

    run.stderr?.on('data', data => {
        console.error(`stderr: ${data}`);
    });

    run.on('close', code => {
        console.log(`child process exited with code ${code}`);
    });
}

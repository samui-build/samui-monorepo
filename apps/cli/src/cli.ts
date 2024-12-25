#!/usr/bin/env node --experimental-require-module

import './cli-commands.js';

import packageJson from '../package.json' with { type: 'json' };
import { cli } from './cli-command.js';

cli.name('samui').version(packageJson.version).description(packageJson.description);

export { cli };

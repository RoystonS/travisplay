import { bootstrap } from 'angular2/platform/browser';

import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';

import { App, APP_PROVIDERS } from './app';

export function main(): Promise<any> {
  return bootstrap(App, [
    ...ENV_PROVIDERS,
    ...PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => main());


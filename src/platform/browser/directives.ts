import { provide, PLATFORM_DIRECTIVES } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES,
];

export const DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, { useValue: APPLICATION_DIRECTIVES, multi: true })
];


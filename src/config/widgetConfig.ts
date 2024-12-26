import { DContextProvider } from '@dynamic-framework/ui-react';
import type { ComponentProps } from 'react';

import liquidParser from '../utils/liquidParser';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const SITE_LANG = liquidParser.parse('{{site.language}}');
export const USER_ID = liquidParser.parse('{{vars.user-id}}');

export const VARS_CURRENCY = {
  symbol: liquidParser.parse('{{vars.currency-symbol}}'),
  precision: Number(liquidParser.parse('{{vars.currency-precision}}')),
  separator: liquidParser.parse('{{vars.currency-separator}}'),
  decimal: liquidParser.parse('{{vars.currency-decimal}}'),
};

export const CONTEXT_CONFIG = {
  language: SITE_LANG,
  currency: VARS_CURRENCY,
} satisfies Partial<ComponentProps<typeof DContextProvider>>;

export const SITE_PATH = {
  DASHBOARD: liquidParser.parse('{{vars.dashboard-path}}'),
};

export type SitePath = keyof typeof SITE_PATH;

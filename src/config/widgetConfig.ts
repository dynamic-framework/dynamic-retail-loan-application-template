import { liquidParser } from '@dynamic-framework/ui-react';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const USER_ID = liquidParser.parse('{{user.id}}');

export const SITE_PATH = {
  DASHBOARD: liquidParser.parse('{{vars.dashboard-path}}'),
};

export type SitePath = keyof typeof SITE_PATH;

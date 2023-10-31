import liquidParser from '../utils/liquidParser';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const SITE_LANG = liquidParser.parse('{{site.language}}');
export const USER_ID = liquidParser.parse('{{user.id}}');

export const SITE_PATH = {
  DASHBOARD: liquidParser.parse('{{vars.dashboard-path}}'),
};

export type SitePath = keyof typeof SITE_PATH;

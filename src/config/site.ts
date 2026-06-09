/**
 * Site-wide runtime flags. Toggle these to switch sections on/off
 * without removing code.
 */

/** Show the Computex authentication banner above the Hero. */
export const COMPUTEX_LIVE = false;

/** Computex 2026 booth meta — surfaced in banner & event link. */
export const COMPUTEX_META = {
  year: '2026',
  venue: 'Taipei Nangang Exhibition Hall',
  url: 'https://www.computextaipei.com.tw/',
} as const;

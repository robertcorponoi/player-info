'use strict'

import BrowserInfo from '../interfaces/Browser';

/**
 * Gets the name and version of the browser that the website visitor is using.
 * 
 * @returns {BrowserInfo}
 */
export function getBrowserInfo(): BrowserInfo {
  const userAgent: string = navigator.userAgent;

  const browserInfo: RegExpMatchArray = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)!;

  return { name: browserInfo[1], version: browserInfo[2] };
}

/**
 * Checks to see if the user is viewing the page on a mobile device or not.
 * 
 * @returns {boolean}
 */
export function isMobile(): boolean {
  return window.matchMedia('only screen and (max-width: 760px)').matches;
}

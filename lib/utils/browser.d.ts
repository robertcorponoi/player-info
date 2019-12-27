import BrowserInfo from '../interfaces/Browser';
/**
 * Gets the name and version of the browser that the website visitor is using.
 *
 * @returns {BrowserInfo}
 */
export declare function getBrowserInfo(): BrowserInfo;
/**
 * Checks to see if the user is viewing the page on a mobile device or not.
 *
 * @returns {boolean}
 */
export declare function isMobile(): boolean;

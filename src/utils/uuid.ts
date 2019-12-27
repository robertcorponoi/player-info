'use strict'

/**
 * Generates a v4 compliant uuid.
 * 
 * @returns {string}
 */
export function uuidv4(): string {

  let d: number = Date.now();
  d += performance.now();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
    const r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);

    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

}
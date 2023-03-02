/**
 * @param {string} copyText
 */
export const copyToClipboard = (copyText) =>
  navigator.clipboard.writeText(copyText);

/**
 * Checks if the given URL has a valid format.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - True if the URL has a valid format, otherwise false.
 */
export const isValidFormat = (url: string): boolean => {
  const urlPattern: RegExp =
    /^(https?):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
  return urlPattern.test(url);
};

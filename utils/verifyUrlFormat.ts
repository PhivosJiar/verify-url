/**
 * Checks if the given URL has a valid format.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - True if the URL has a valid format, otherwise false.
 */
export const isValidFormat = (url: string): boolean => {
  const urlPattern: RegExp =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d+))?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;
  return urlPattern.test(url);
};

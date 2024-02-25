"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFormat = void 0;
/**
 * Checks if the given URL has a valid format.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - True if the URL has a valid format, otherwise false.
 */
var isValidFormat = function (url) {
    var urlPattern = /^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
    return urlPattern.test(url);
};
exports.isValidFormat = isValidFormat;

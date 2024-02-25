"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFormat = void 0;
/**
 * Checks if the given URL has a valid format.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - True if the URL has a valid format, otherwise false.
 */
var isValidFormat = function (url) {
    var urlPattern = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d+))?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;
    return urlPattern.test(url);
};
exports.isValidFormat = isValidFormat;
console.log((0, exports.isValidFormat)("http://example"));

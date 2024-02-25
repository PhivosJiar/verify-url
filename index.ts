import axios from "axios";
import { isValidFormat } from "./utils/verifyUrlFormat";

/**
 * Checks if the given URL has a valid format and if it is reachable.
 * @param {string} url - The URL to be checked.
 * @returns {Promise<boolean>} - A Promise that resolves to true if the URL is valid and reachable, otherwise false.
 */
const isValidUrl = async (url: string): Promise<boolean> => {
  // Check if URL has a valid format
  if (!isValidFormat(url)) return false;

  try {
    // Attempt to send a HEAD request to the URL to verify its reachability
    await axios.head(url);
    return true;
  } catch (error) {
    return false;
  }
};

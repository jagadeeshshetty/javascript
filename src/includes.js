/**
 * includes() should return 'true' if searchElement is present. Otherwise returns 'false'.
 * 1. Loop through the array.
 * 2. If searching element present, return true. Otherwise returns 'false'.
 */

function includes(array, searchElement) {
  // Loop through the array.
  for (let item = 0; item <= array.length; item++) {
    // If searching element present, return true.
    if (item === searchElement) return true;
  }
  // If searching element not present, return false.
  return false;
}

module.exports = includes;

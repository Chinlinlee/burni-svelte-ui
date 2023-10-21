// place files you want to import through the `$lib` alias in this folder.

/**
 * 
 * @param {string} string 
 * @returns 
 */
export function isUrlValid(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}


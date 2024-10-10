/**
 * Concatenate non-empty class names into a single string.
 *
 * @param  {...any} classList - The list of class names to concatenate.
 * @returns {string} - A space-separated string of class names.
 */
export function classes(...classList) {
  return classList
    .filter((klass) => typeof klass === "string" && klass.trim())
    .join(" ");
}

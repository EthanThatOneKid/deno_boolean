/**
 * parse checks the boolean representation of a given string.
 *
 * @remarks Originally from
 * https://github.com/EthanThatOneKid/acmcsuf.com/blob/9f64ddcb19cd38e67c553c1d444d6e135857e484/src/lib/server/parse-bool/parse-bool.ts#L11
 */
export function parse(payload?: string | null): boolean {
  // It is easier to first check if the string is falsy, to determine the
  // boolean value of the string.
  const isFalsy = !payload || FALSY_PATTERN.test(payload);
  return !isFalsy;
}

/**
 * Non-exhaustive list of JavaScript expressions that evaluate to falsy.
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy/
 */
const FALSY_PRIMITIVES = [
  "0",
  "0.0",
  "0x0",
  "null",
  "undefined",
  "false",
  "NaN",
  "''",
  '""',
  "``",
];

/**
 * RegExp pattern compiled from falsy primitives above.
 */
const FALSY_PATTERN = new RegExp(`^(${FALSY_PRIMITIVES.join("|")})$`, "i");

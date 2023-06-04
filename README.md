# Boolean

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/boolean/mod.ts)

This module provides a simple utility function to parse the boolean
representation of a given string.

## Usage

Import the `parse` function from the module:

```ts
import { parse } from "https://deno.land/x/boolean/mod.ts";
```

The `parse` function accepts a string as an optional parameter and returns a
boolean value based on the input.

```typescript
const result = parse("true");
console.log(result); // true

const result2 = parse("false");
console.log(result2); // false

const result3 = parse("0");
console.log(result3); // false

const result4 = parse("1");
console.log(result4); // true

const result5 = parse(null);
console.log(result5); // false

const result6 = parse(undefined);
console.log(result6); // false
```

## Credits

This module is based on the code originally from
[EthanThatOneKid/acmcsuf.com](https://github.com/EthanThatOneKid/acmcsuf.com/blob/9f64ddcb19cd38e67c553c1d444d6e135857e484/src/lib/server/parse-bool/parse-bool.ts#L11).

## Falsy Values

The `parse` function considers the following JavaScript expressions as falsy
values:

- `"0"`
- `"0.0"`
- `"0x0"`
- `"null"`
- `"undefined"`
- `"false"`
- `"NaN"`
- `""` (empty string)
- `''` (empty string enclosed in single quotes)
- (actual empty string)

For more information about falsy values, refer to the
[MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Falsy/).

## License

This module is licensed under the [MIT License](LICENSE).

---

Built with ❤️ by [**@EthanThatOneKid**](https://etok.codes/)

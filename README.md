# classes

A no-nonsense alternative to `classNames` for combining CSS class names. This utility strips away unnecessary complexity and keeps things straightforward: it **just concatenates non-empty strings**—nothing more.

No conditional object-based class mapping, no automatic array flattening—just pure simplicity.

## Install

```sh
npm install @tersed/classes
```

## The Code

This function is so simple that you don’t need to install a package. Just copy and paste the following code:

```js
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
```

## Why Use classes?

If you use libraries like classNames, you’ve likely encountered conditional object-based class mapping or automatic array flattening, which can make your code harder to read:

```js
const isPrimary = true;
const isDisabled = false;
classNames(
  "btn",
  {
    "btn-primary": isPrimary,
    "btn-disabled": isDisabled,
  },
  ["custom-class"]
);
// Returns: 'btn btn-primary custom-class'
```

With **classes**, there’s none of that. It’s as simple as:

```js
const isPrimary = true;
const isDisabled = false;
classes(
  "btn",
  isPrimary && "btn-primary",
  isDisabled && "btn-disabled",
  "custom-class"
);
// Returns: 'btn btn-primary custom-class'
```

## Usage

Just call the classes function with any number of class names. Only non-empty strings will be included in the result:

```js
classes("btn", "btn-primary");
// Returns: 'btn btn-primary'
```

## No Falsy Values

Falsy values like null, false, or empty strings are ignored:

```js
classes("btn", null, false, "", "btn-primary");
// Returns: 'btn btn-primary'
```

## Unit Tests?

This function is straightforward and doesn’t require a unit test. It simply concatenates non-empty strings—no magic, no surprises. It’s a pure utility. However, if you feel the need, you can copy the test included in the [source code](./src/classes.test.js). If you trust JavaScript’s filter and join methods, you can trust classes.

## License

MIT

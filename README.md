# classes

A no-nonsense alternative to `classNames` for combining CSS class names. This utility strips away unnecessary complexity and keeps things straightforward: it **just concatenates non-empty strings**—nothing more.

No conditional object-based class mapping. No confusing APIs. Just simplicity.

## The Code

This function is so simple that you don’t need to install a package. Just copy and paste the following code:

```js
/**
 * Concatenate non-empty class names into a single string.
 * 
 * @param  {...any} classList - The list of class names to join.
 * @returns {string} - A space-separated string of class names.
 */
export function classes(...classList) {
  return classList
    .filter((klass) => typeof klass === "string" && klass.trim().length > 0)
    .join(" ");
}
```

## Why Use classes?

If you’re using classNames or similar libraries, you’ve probably run into conditional object-based class mapping that makes your code harder to read:

```js
// Typical classNames usage:
const className = classNames({
  'btn': true,
  'btn-primary': isPrimary,
  'btn-disabled': isDisabled
});
```

With classes, there’s none of that. It’s as simple as:

```js
const className = classes('btn', isPrimary && 'btn-primary', isDisabled && 'btn-disabled');
```

## Usage

Just call the classes function with any number of class names. Only non-empty strings will be included in the result:

```js
const className = classes('btn', 'btn-primary');
// Output: 'btn btn-primary'
```

## Handling Conditions

You can use native JavaScript logic to handle conditions without the clutter of objects:

```js
const isPrimary = true;
const isDisabled = false;

const className = classes('btn', isPrimary && 'btn-primary', isDisabled && 'btn-disabled');
// Output: 'btn btn-primary'
```

## No Falsy Values

Falsy values like null, false, or empty strings are ignored:

```js
const className = classes('btn', null, false, '', 'btn-primary');
// Output: 'btn btn-primary'
```

## Why No Unit Tests?

This function is so simple, it doesn’t need a unit test. All it does is concatenate non-empty strings. No magic, no surprises. It’s pure utility:

```js
classes('btn', 'btn-primary');  // Output: 'btn btn-primary'
classes('btn', '', false, 'btn-primary');  // Output: 'btn btn-primary'
```

If you can trust JavaScript’s filter and join methods, you can trust classes.

## License

MIT

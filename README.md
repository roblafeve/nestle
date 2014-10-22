Nestle
===========

Nestle is a white space generator built for Stylus. It makes it easy to maintain consistent vertical rythm and inner spacing. Since the web isn't purely vertical, Nestle includes a robust grid module that ties in seemlessly.

## Module Usage

### Nest

Call `nest()` inside your project's stylus directory.
```js
nest(1.5, -2.5, 6)
```

Apply `class='nest padded'` to element:
```html
<div class='nest padded'>
  <!-- Level 1 Padded Content -->
  <div class='nest padded'>
    <!-- Level 2 Padded Content -->
  </div>
</div>
```

### Grid

A grid consists of:
```html
<div class='grid'>
  <div class='grid-items'>
    <!-- Elements to be displayed in a grid -->
  </div>
</div>
```
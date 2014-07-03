Nestle
===========

This document is a work in progress...

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
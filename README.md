Nestle
===========

Nestle is a white space generator built for Stylus. It makes it easy to maintain consistent vertical rythm and inner spacing. Since the web isn't purely vertical, Nestle includes a robust grid module that ties in seemlessly.

## Installation

```bash
$ npm install nestle
```

## Setup

Be sure to import Nestle into your `main.styl` or equivilant file (at the top, preferably). Adjust the path of this import depending on your setup. If you're using Express be sure to require nestle

```Stylus
@import 'nestle'
```

## Configuration

To begin using Nestle, place the `nestle()` function somewhere in your project. If you plan on using `@extend` to utilize various Nestle classess inside your custom classes, place this mixin high enough in your code to allow for this.

```Stylus
nestle(ratio, shift, steps, dev, bg)
```
- `ratio` — sets ratio for white space scale (default `1.5`)
- `shift` — adjusts ratio relative to base font size (default `-2.5`)
- `steps` — number of steps in the scale (default `6`, like h1-h6)
- `dev`   — when set to `true` elements are rendered with backgrounds to let you see what you're doing. This is especially helpful for becoming familiar with how (default `false`)
- `bg` — color used for `dev` option (default `teal`)

## Usage

The `nestle()` function generates CSS classes that define padding for the element it is applied to and sets spacing for child elements, including grids.

### Components

#### `.pad-x`

This class may be applied directly to the element that gets padding, but extending it inside your custom elements may give you more control.

```CSS
.pad-1 { padding: 2.756em }
.pad-2 { padding: 1.837em }
.pad-3 { padding: 1.225em }
.pad-4 { padding: 0.816em }
.pad-5 { padding: 0.544em }
.pad-6 { padding: 0.363em }
```

#### `.nest-x`

This class may be applied directly to the element that defines a new nesting context, but extending it inside your custom elements may give you more control.

```CSS
.nest-1 * { margin-top: 1.837em }
.nest-2 * { margin-top: 1.225em }
.nest-3 * { margin-top: 0.816em }
.nest-4 * { margin-top: 0.544em }
.nest-5 * { margin-top: 0.363em }
.nest-6 * { margin-top: 0.242em }
```

#### `.grid`

Since it would be strange to only have vertical rythm and spacing control, Nestle comes with a rubust horizontal grid system built in. It's best to think of this as a reusable module with a few key components. These components consist of:

- `.grid` — this element recieves all modifer classes and when the grid has spacing it counteracts the inevitable outer gutters that a grid produces. `.grid` can be modified by various subclasses (e.g. `.grid.spaced`):

  * `.spaced` — horizontally spaces colums and ties into the nest level set by the nearest `.nest-x` parent
  * `.auto` — will divide column width equally across total width of grid (does not work with `.col.min` and `.col.max`)
  * `.inline` — causes grid to collapse to its content width
  * `.align-top` — columns vertically align to the top
  * `.align-middle` — columns vertically align to the middle
  * `.align-bottom` — columns vertically align to the bottom
  * `.height-full` — fills height of parent

- `.grid-items` — this element contains the group of elements that you want to be presented in columns.
- `.col` — this element represents the grid column and has two sub-classes:
  + `.min` — column will collapse to minimum width that its content allows
  + `.max` - column will expand as far as other columns allow

```HTML
<div class="grid">
  <div class="grid-items">
    <div class="col"><!-- content --></div>
    <div class="col"><!-- content --></div>
    <div class="col"><!-- content --></div>
  </div>
</div>
```

### Examples

Applied directly to HTML:

```HTML
<article class="pad-1 nest-1">
  <header><!-- content --></article>
  <div><!-- content --></div>
  <footer><!-- content --></footer>
</article>
```

Using @extend:
```CSS
article
  @extend .pad-1, .nest-1
```




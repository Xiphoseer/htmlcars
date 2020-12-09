# htmLCARS

This is my take on re-creating the LCARS interface ("Okudagrams") from the Star Trek
television series in HTML / CSS.

## License

The code in this project is licensed under the [MPL-2.0](https://spdx.org/licenses/MPL-2.0.html).

### Fonts

This does not apply to `docs/.vuepress/public/assets/fonts/LCARSGTJ3.ttf` which
is used under a freeware license from <https://gtjlcars.de/LCARSindex/LCARSFONTS.htm>.

The exact licensing note is in german, but the basic gist is:

- It's ALLOWED to *download* and *use* the font file
- It's REQUIRED to keep the filename and file content intact
- It's NOT ALLOWED to *sell* it

### General LCARS IP

CBS, the studio that owns the rights to the Star Trek assets seems to
hold the view that using an LCARS interface on a paid app is infringing
on their copyright. So while it might be fine that this project exists,
it's likely that you may not use this project for any commercial product.

## Installation

Add the following line to your `.npmrc`:

```
@xiphoseer:registry=https://npm.pkg.github.com/xiphoseer
```

Then, run

```
npm install @xiphoseer/htmlcars
```

or add the following line to `dependencies` in your `package.json`:

```
"@xiphoseer/htmlcars": "^0.1.0"
```

### Font setup

The (S)CSS assumes that a `font-family` called `LCARSGTJ3` is present
which corresponds to the file mentioned in [License](#license). Assuming you
want to use that font in your project, you need to add something like
the following to your project:

```css
/* http://www.gtjlcars.de/LCARSindex/LCARSFONTS.htm */
@font-face {
  font-family: LCARSGTJ3;
  src: url(/htmlcars/assets/fonts/LCARSGTJ3.ttf);
}
```

## Development setup
```
yarn install
```

### Compiles and hot-reloads docs app for development
```
yarn run docs:dev
```

### Compiles and minifies docs app for production
```
yarn run docs:build
```

### Compiles and minifies library for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

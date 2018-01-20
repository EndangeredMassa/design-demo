# component-library

A demo of how to take advantage of Ember's ecosystem to do awesome design work.

TODO:

- fingerprinting
- living styleguide
  - component builder
- linting
- visual regression testing
- addon docs



## Styles
In the absence of specific CSS conventions in Ember/Ember-cli, we've adopted the following conventions.
Should Ember ever adopt a set of CSS conventions, we will migrate towards those.

### Preprocessor
Styles are written in SASS's `.scss` format.

We don't have any auto-loading mechanism, so you will
need to manually `@import` files you add in the projects `app/styles/app.scss` manifest.

### File Locations
The structure of `.scss` files should mirror the structure the `app/templates` folder. So,

```
├── components
│   ├── bank-account-display.hbs
├── pinterest
│   ├── auth
│   │   └── login.hbs
│   ├── auth.hbs
│   └── protected
│       └── social-verify.hbs
```

Would, maximally, have stylesheets:

```
├── components
│   ├── bank-account-display.scss
├── pinterest
│   ├── auth
│   │   └── login.scss
│   ├── auth.scss
│   └── protected
│       └── social-verify.scss
```

Stylesheet files are _optional_. That is, if a template doesn't require any custom CSS, the `.scss`
file may be omitted.

Except for "global" styles no `.scss` file should exist that doesn't have a matching component in either
`templates` or `components` directories.

### Classnames/Structure
We've adopted [BEM](http://getbem.com/) as a standard for deciding class names and element structure.
The "block" defined in an `.scss` file should match the filename, with directory nesting becoming dasherized.

So if

```
├── components
│   └── bank-account-display.scss
```

Defines a block, that block's class name should be `.bank-account-display`


Likewise, if

```
├── pinterest
│   └── protected
│       └── social-verify.scss
```

Defines a block, that block's class name should be `.pinterest-protected-social-verify`.

### Where to apply classnames.
To avoid extra `<div>` nesting that makes styling confusing, a block's class name should be
appled in a component's javascript definition (if one exists), not as a outer containing block in its template:

e.g.

```
├── components
│   └── bank-account-display.js
```

```
export default Component.extend({
  classNames: ['bank-account-display']
})
```

But NOT

```
├── components
│   └── bank-account-display.hbs
```

```
<div class='bank-account-display'>
</div>
```
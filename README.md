# component-library

A demo of how to take advantage of Ember's ecosystem to do awesome design work.

Demo:
- docs
- living styleguide
- component builder
- percy integration
- BEM rules
- linting (including some bem rules)
- a11y checking
- fingerprinting: ember build --environment=production
- future file structure

TODO:
- update scss linting rules
- blueprint

Extra:
- focus mode for components
- stand-alone component builder

Future:
- improve a11y error logging: https://github.com/ember-a11y/ember-a11y-testing/issues/18


## Possible Future File Structure

[Module Unification](https://github.com/dgeb/rfcs/blob/module-unification/text/0000-module-unification.md#example-application)
will have a general file structure under `/src`.

That places styles under `/src/styles/app.scss`. From there, we can import styles from our components. That would allow us to have a file structure like:

```
src
├── ...
└── ui
    ├── ...
    ├── components
    │   └── list-paginator
    │       ├── paginator-control
    │       │   ├── component.js
    │       │   ├── styles.scss
    │       │   └── template.hbs
    │       ├── component.js
    │       ├── styles.scss
    │       └── template.js
    ├── routes
    │   ├── application
    │   │   └── template.hbs
    │   ├── index
    │   │   ├── controller.js
    │   │   ├── route.js
    │   │   └── template.hbs
    │   └── posts
    │       ├── route.js
    │       ├── styles.scss
    │       └── template.hbs
    ├── styles
    │   └── app.scss
    └── index.html
```

File names in IDE tabs can get confusing with this style of file strucutre, but deduping names in tabes and showing paths in title bars help a lot.


## Style Authoring Guidelines
In the absence of specific CSS conventions in Ember/Ember-cli, we've adopted the following conventions.
Should Ember ever adopt a set of CSS conventions, we will migrate towards those.

### Preprocessor
Styles are written in SASS's `.scss` format.

We don't have any auto-loading mechanism, so you will
need to manually `@import` files you add in the projects `app/styles/app.scss` or `addon/styles/addon.scss` manifest.

### File Locations
The structure of `.scss` files should mirror the structure the `app/templates` folder. So,

```
├── components
│   └── bank-account-display.hbs
├── auth
│   └── login.hbs
├── auth.hbs
└── protected
    └── connect-account.hbs
```

Would, maximally, have stylesheets:

```
├── components
│   └── bank-account-display.scss
├── auth
│   └── login.scss
├── auth.scss
└── protected
    └── connect-account.scss
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
├── protected
│   └── connect-account.scss
```

Defines a block, that block's class name should be `.protected-connect-account`.

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
  <!-- component content -->
</div>
```

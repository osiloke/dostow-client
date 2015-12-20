dostow
======

Usage
-----

###AMD

If you have AMD modules support in your project, you can use this library like that:

```javascript
define(['path/to/library/dostow'], function(dostow){

});
```

###CommonJS

If you have CommonJS support in your project, you can use this library like that:

```javascript
var lib = require('dostow/dist/standalone.js');
```

###Standalone

If you prefere to add the library directly to the HTML page, use it like that:

```html
<script src="path/to/lib/dostow/dist/standalone.js"></script>
```

The library will be available as `window['_dostow']` global variable.


API
---




## How to develop the library?

### Initialize

```
git clone path/to/library
npm i
npm i -g bower
bower install
```


### Make a standalone build

[Webpack][1] takes care of creating a [standalone][2] [UMD][3] build. Just run:

```
npm run pack
```

## Run tests

To run a single test use:

```
npm test
```

To run a continous tdd session use:

```
npm run tdd
```

This command will run [karma][4] with [jasmine 2.1][5].

After the test run you will get the **test coverage reports** inside the `/coverage` folder!

The coverage is created by [istanbul][6].

## Bump version

To bump versions in both `bower.json` and `package.json`, you can use [mversion][10].

## CI

Do not forget to add your project to [travis-ci][11] and [coveralls][12]

## Anti-ruining Automated Quality Assurance System

Are you afraid of committing "bad quality" code and ruining everything?
Afraid no more!

This project has a **git hooks integration** (sponsored by [husky][9]), which will run tests and check your javascript **before each commit**.

You are safeguarded against silly mistakes by [jshint][7] and [fixmyjs][8]!

You will not be able to commit the code with:

1. Failing tests
2. Bad javascript code style



[1]:http://webpack.github.io/
[2]:http://webpack.github.io/docs/configuration.html#output-librarytarget
[3]:https://github.com/umdjs/umd
[4]:http://karma-runner.github.io/0.12/index.html
[5]:http://jasmine.github.io/2.1/introduction.html
[6]:http://gotwarlost.github.io/istanbul/
[7]:http://jshint.com/about/
[8]:https://github.com/jshint/fixmyjs
[9]:https://github.com/typicode/husky
[10]:https://www.npmjs.com/package/mversion
[11]:https://travis-ci.org
[12]:https://coveralls.io/repos
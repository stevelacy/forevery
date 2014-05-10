# forEvery
[![Build Status](https://travis-ci.org/stevelacy/forevery.png?branch=master)](https://travis-ci.org/stevelacy/forevery)
[![NPM version](https://badge.fury.io/js/forevery.png)](http://badge.fury.io/js/forevery)



#### forEach loops in Promise notation
##### Appends onto Array.prototype with .forEvery

### Information

<table>
<tr>
<td>Package</td><td>forevery</td>
</tr>
<tr>
<td>Description</td>
<td>forEvery - forEach with promises</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

#### Node.js
#### Install
    npm install forevery --save

#### Browser
Include a src to [forevery.js](https://github.com/stevelacy/forevery/blob/master/forevery.js)

html
```html
<script src="forevery.js"></script>
```
jade
```jade
script(src="forevery.js")
```

### Examples

Basic `.then()`
```js
var array = ["first", "second", "third"];
array.forEvery(function(key, value, array) {
  doSomething(value);
}).then(function(data) {
  nextFunction();
});
```

Basic `.done()`
```js
var array = ["first", "second", "third"];
array.forEvery(function(key, value, array) {
  doSomething(value);
}).done(function(data) {
  nextFunction();
});
```

Catch error `.catch()`
```js
var array = ["first", "second", "third"];
array.forEvery(function(key, value, array) {
  doSomething(value);
}).catch(function(err){
  doSomethingWith(err);
});

```
#### [Other Examples](https://github.com/stevelacy/forevery/tree/master/examples) including browser usage

## API

#### Array.forEvery (Function(key, value, array)) 
`Array.forEvery Function`

Action function to occur every iteration

```js
array = [];
myArray.forEvery(function(k, v){
  array.push(v);
});
```

#### .then()
`Promise`

```js
array = [];
myArray.forEvery(function(k, v){
  array.push(v);
}).then(function(data){
  // forEvery function finished
  // Do something with `data`
});
```

#### .done()
`Promise`

```js
array = [];
myArray.forEvery(function(k, v){
  array.push(v);
}).then(function(data){
  // forEvery function finished - end promise
  // Do something with `data`
});
```

#### .catch()
`Promise`

```js
array = [];
myArray.forEvery(function(k, v){
  array.push(v);
}).catch(function(err){
  // forEvery function errored
  // Do something with `err`
});
```

### Build

`npm install gulp -g`

```bash
$ gulp
```
[forevery.js](https://github.com/stevelacy/forevery/blob/master/forevery.js) will now be built


### LICENSE

(MIT License)

Copyright (c) 2014 Steve Lacy <me@slacy.me>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
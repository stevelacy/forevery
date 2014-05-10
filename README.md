# forEvery

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
<td>>= 0.9</td>
</tr>
</table>

## Usage
#### Install
    npm install forevery --save


### Examples

```js
var array = ["first", "second", "third"];
array.forEvery(function(key, value, array) {
  doSomething(value);
}).done(function(data) {
  nextFunction();
});

```

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
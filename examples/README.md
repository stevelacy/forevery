## Examples


#### Convert each key / value to an Object

```coffee-script

array = ["1", "2", "3", "test"]
myObj = {}

array.forEvery (key, value, array) ->
  myObj[key] = value
.done (data) ->
  console.log myObj // { '0': '1', '1': '2', '2': '3', '3': 'test' }


```

#### Convert each key / value to an object with error catch

```coffee-script
array = ["1", "2", "3", "test"]
myObj = {}

array.forEvery (key, value, array) ->
  myObj[key] = value
.catch (err) ->
  console.log err
.done (data) ->
  console.log data
  console.log myObj
```
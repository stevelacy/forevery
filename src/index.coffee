if typeof module isnt "undefined" and typeof module.exports isnt "undefined"
  P = require "promise"
  module.exports = Array::forEvery

else
  window.Array::forEvery = Array::forEvery
  P = Promise
  unless P::done
    P::done = (cb, eb) ->
      @then cb, eb
      .then null, (err) ->
        setTimeout ->
          throw err
        , 0

Array::forEvery = (action) ->
  array = @
  return new P (resolve, reject) ->
    if !array.length
      reject()
    try
      i = 0
      while i < array.length
        action i, array[i], array if action?
        i++
        resolve array if array.length is i
    catch err
      error = new Error err
      reject error.stack


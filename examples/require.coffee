forEvery = require "../"

array = ['test', 'array']

array.forEvery (k, v, a) ->
  console.log k, v
.done (data) ->
  console.log "done"

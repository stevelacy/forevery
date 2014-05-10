forEvery = require "../"

array = [{data:"test"},{data:"code"}]

array.forEvery (k, v, a) ->
  console.log v.data if v.data
.done (data) ->
  console.log "done"

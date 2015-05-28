if typeof module isnt "undefined" and typeof module.exports isnt "undefined"
  require "../"
  should = require "should"
else
  should = should



describe "forEvery", () ->
  it "should return a .then() promise", (done) ->
    array = ["1", "2", "3", "test"]
    forEvery = array.forEvery()

    forEvery.then.should.be.type "function"
    forEvery.then.should.not.be.type "string"
    forEvery.then.should.not.be.type "object"

    done()

  it "should return a .done() promise", (done) ->
    array = ["1", "2", "3", "test"]
    forEvery = array.forEvery()

    forEvery.done.should.be.type "function"
    forEvery.done.should.not.be.type "string"
    forEvery.done.should.not.be.type "object"

    done()

  it "should have an action function", (done) ->
    array = ["1", "2", "3", "test"]
    array.forEvery (key, value, array) ->
      should.exist key
      should.exist value
      should.exist array

    done()

  it "should produce the desired output", (done) ->
    array = ["1"]
    array.forEvery (key, value, array) ->
      should.exist key
      key.should.equal 0
      should.exist value
      value.should.equal "1"

    done()

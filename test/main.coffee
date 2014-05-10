if typeof module isnt "undefined" and typeof module.exports isnt "undefined"
  require "../"
  should = require "should"
else
  should = should



describe "Array.prototype.forEvery", ->

  describe "promises", ->

    it "should return a .then() promise", (pass) ->
      array = ["1", "2", "3", "test"]
      forEvery = array.forEvery()

      forEvery.then.should.be.an.instanceOf Function
      forEvery.then.should.not.be.an.instanceOf String
      forEvery.then.should.be.an.instanceOf Object
      pass()

    it "should return a .done() promise", (pass) ->
      array = ["1", "2", "3", "test"]
      forEvery = array.forEvery()

      forEvery.done.should.be.an.instanceOf Function
      forEvery.done.should.not.be.an.instanceOf String
      forEvery.done.should.be.an.instanceOf Object
      pass()

    it "should return a .catch() promise", (pass) ->
      array = ["1", "2", "3", "test"]
      forEvery = array.forEvery()

      forEvery.catch.should.be.an.instanceOf Function
      forEvery.catch.should.not.be.an.instanceOf String
      forEvery.catch.should.be.an.instanceOf Object
      pass()

  describe "action", ->
    
    it "should have an action function", (pass) ->
      array = ["1", "2", "3", "test"]
      array.forEvery.should.be.an.instanceOf Function
      pass()

    it "should have three arguments", (pass) ->
      array = ["1", "2", "3", "test"]
      array.forEvery (k, v, a) ->
        k.should.not.be.null
        v.should.not.be.null
        a.should.not.be.null
      .done ->
        pass()

    it "should not have more than three arguments", (pass) ->
      array = ["1", "2", "3", "test"]
      array.forEvery (k, v, a, y) ->
        k.should.not.be.null
        v.should.not.be.null
        a.should.not.be.null
        (y == undefined).should.be.true
      .done ->
        pass()

  describe "output", ->

    it "should produce output", (pass) ->
      array = ["1", "2", "3", "test"]
      array.forEvery()
      .done (data) ->
        data.should.not.be.null
        data.should.be.an.instanceOf Array
        pass()

    it "should produce an Array", (pass) ->
      array = ["1", "2", "3", "test"]
      array.forEvery()
      .done (data) ->
        data.should.be.an.instanceOf Array
        pass()

    it "should produce a matching array", (pass) ->
      array = ["1", "2", "3", "test"]
      array.forEvery()
      .done (data) ->
        data.should.be.an.instanceOf Array
        data.should.equal array
        pass()


  return
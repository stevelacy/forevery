(function() {
  var should;

  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    require("../");
    should = require("should");
  } else {
    should = should;
  }

  describe("Array.prototype.forEvery", function() {
    describe("promises", function() {
      it("should return a .then() promise", function(pass) {
        var array, forEvery;
        array = ["1", "2", "3", "test"];
        forEvery = array.forEvery();
        forEvery.then.should.be.an.instanceOf(Function);
        forEvery.then.should.not.be.an.instanceOf(String);
        forEvery.then.should.be.an.instanceOf(Object);
        return pass();
      });
      it("should return a .done() promise", function(pass) {
        var array, forEvery;
        array = ["1", "2", "3", "test"];
        forEvery = array.forEvery();
        forEvery.done.should.be.an.instanceOf(Function);
        forEvery.done.should.not.be.an.instanceOf(String);
        forEvery.done.should.be.an.instanceOf(Object);
        return pass();
      });
      return it("should return a .catch() promise", function(pass) {
        var array, forEvery;
        array = ["1", "2", "3", "test"];
        forEvery = array.forEvery();
        forEvery["catch"].should.be.an.instanceOf(Function);
        forEvery["catch"].should.not.be.an.instanceOf(String);
        forEvery["catch"].should.be.an.instanceOf(Object);
        return pass();
      });
    });
    describe("action", function() {
      it("should have an action function", function(pass) {
        var array;
        array = ["1", "2", "3", "test"];
        array.forEvery.should.be.an.instanceOf(Function);
        return pass();
      });
      it("should have three arguments", function(pass) {
        var array;
        array = ["1", "2", "3", "test"];
        return array.forEvery(function(k, v, a) {
          k.should.not.be["null"];
          v.should.not.be["null"];
          return a.should.not.be["null"];
        }).done(function() {
          return pass();
        });
      });
      return it("should not have more than three arguments", function(pass) {
        var array;
        array = ["1", "2", "3", "test"];
        return array.forEvery(function(k, v, a, y) {
          k.should.not.be["null"];
          v.should.not.be["null"];
          a.should.not.be["null"];
          return (y === void 0).should.be["true"];
        }).done(function() {
          return pass();
        });
      });
    });
    describe("output", function() {
      it("should produce output", function(pass) {
        var array;
        array = ["1", "2", "3", "test"];
        return array.forEvery().done(function(data) {
          data.should.not.be["null"];
          data.should.be.an.instanceOf(Array);
          return pass();
        });
      });
      it("should produce an Array", function(pass) {
        var array;
        array = ["1", "2", "3", "test"];
        return array.forEvery().done(function(data) {
          data.should.be.an.instanceOf(Array);
          return pass();
        });
      });
      return it("should produce a matching array", function(pass) {
        var array;
        array = ["1", "2", "3", "test"];
        return array.forEvery().done(function(data) {
          data.should.be.an.instanceOf(Array);
          data.should.equal(array);
          return pass();
        });
      });
    });
  });

}).call(this);

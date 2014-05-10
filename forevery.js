(function() {
  var P;

  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    P = require("promise");
    module.exports = Array.prototype.forEvery;
  } else {
    window.Array.prototype.forEvery = Array.prototype.forEvery;
    P = Promise;
    if (!P.prototype.done) {
      P.prototype.done = function(cb, eb) {
        return this.then(cb, eb).then(null, function(err) {
          return setTimeout(function() {
            throw err;
          }, 0);
        });
      };
    }
  }

  Array.prototype.forEvery = function(action) {
    var array;
    array = this;
    return new P(function(resolve, reject) {
      var err, error, i, _results;
      if (!array.length) {
        reject();
      }
      try {
        i = 0;
        _results = [];
        while (i < array.length) {
          if (action != null) {
            action(i, array[i], array);
          }
          i++;
          if (array.length === i) {
            _results.push(resolve(array));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      } catch (_error) {
        err = _error;
        error = new Error(err);
        return reject(error.stack);
      }
    });
  };

}).call(this);

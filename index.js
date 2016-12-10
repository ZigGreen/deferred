/**
 * see original source on https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
 */
function Deferred() {
  if (typeof(Promise) != 'undefined' && Promise.defer) {
    return Promise.defer();
  } else if (typeof(PromiseUtils) != 'undefined'  && PromiseUtils.defer) {
    return PromiseUtils.defer();
  } else {
    if (!(this instanceof Deferred)) {
      return new Deferred();
    }

    this.resolve = null;
    this.reject = null;

    this.promise = new Promise(function(resolve, reject) {
      this.resolve = resolve;
      this.reject = reject;
    }.bind(this));

    Object.freeze(this);
  }
}

module.exports = Deferred;
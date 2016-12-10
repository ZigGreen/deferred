# Deferred api for Promise
[by Mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred)

```javascript
const dfd = new Deferred();
dfd.promise.then(x => {
    alert(x);
})

dfd.resolve(42);
// dfd.reject(/* some error */);
```
# Questions

Q1: Explain the output of the following code and why

```js
setTimeout(function () {
  console.log('1');
}, 100);
console.log('2');
```

`Javascript manage an event queue internally for all async tasks. setTimeout's callback function is executed asynchronously after the context that called it is cleared. When setTimeout is called, it places its callback function on the stack and returns to the current execution context. This explains why it will print first '2' and then '1'`

---

Q2: Explain the output of the following code and why

```js
function foo(d) {
  if (d < 10) {
    foo(d + 1);
  }
  console.log(d);
}
foo(0);
```

`This is just tail recursion, the foo function will call its self with an incremented until the termination condition is reached. Each call is put on the stack until there are no more calls. The last call will be the one that logs 10, and since the stack is a LIFO the values are logged from 10 to 0.`

---

Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
function foo(d) {
  d = d || 5;
  console.log(d);
}
```

`- If d is 0, the function will log '5' instead of 0 to the console since 0 is a falsy value.

- If d is any other falsy value like an empty `string`, `false`, e.t.c we will logout five instead of that value. This isn't the desired behaviour since providing nothing is only equivalent to providing `undefined` as an argument but not any other falsy values.
- This is kind of unreadable because we try to create a new local variable y which has the same name as the function parameter y and we do not prefix it with any language constructs used to name values.
- A user doesn't know the type `d` `

---

Q4: Explain the output of the following code and why

```js
function foo(a) {
  return function (b) {
    return a + b;
  };
}
var bar = foo(1);
console.log(bar(2));
```

`This can be explained as Currying. Currying is the process of taking in a function that accepts multiple parameters as input and returning a function that accepts a single argument. What’s happening is that each time the curried function is called, it returns a brand new function. This function binds the previous arguments to the curried function. When all of the arguments have been passed to the underlying function, the result is returned. `

---

Q5: Explain how the following function would be used

```js
function double(a, done) {
  setTimeout(function () {
    done(a * 2);
  }, 100);
}
```

`Double calls the done `callback`with the doubled value of`a`after`100` milliseconds.`

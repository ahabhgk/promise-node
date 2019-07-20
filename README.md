# promise-node

A simple way to handle asynchronous.

## install

```shell
$ yarn add promise-node
```

or

```shell
$ npm install --save promise-node
```

## usage

Use `.start(param1, param2, ...)` to pass arguments to the first promiseNode's function.

Use `.next(param1, param2, ...)` to pass arguments to next promiseNode's function.

When you using `function () {}`, you can use `this.next()` or `instance.next()` to resolve this function, but when you using arrow function, `instance.next()` is the only way to resolve this arrow function.

### `class` mode

```js
import PromiseNode from 'promise-node'

const p1 = new PromiseNode(function (a) {
  console.log('start')
  setTimeout(() => {
    console.log(a++)
    this.next(a, 'hah')
  }, 2000)
})
const p2 = new PromiseNode((b, str) => {
  console.log(b, str)
  p2.next(b + str)
})
const p3 = new PromiseNode((c) => {
  setTimeout(() => {
    console.log(c)
    console.log('end')
  }, 1000)
})

p1.setNext(p2).setNext(p3)
p1(0)
```

### `fn` mode

When you open this mode, the `Function.prototype` will add two function.

```js
import PromiseNode from 'promise-node'

PromiseNode.fn() // open `fn` mode

const p1 = function (a) {
  console.log('start')
  setTimeout(() => {
    console.log(a++)
    p1.next(a, 'hah')
  }, 2000)
}
const p2 = (b, str) => {
  console.log(b, str)
  p2.next(b + str)
}
const p3 = (c) => {
  setTimeout(() => {
    console.log(c)
    console.log('end')
  }, 1000)
}

p1.setNext(p2).setNext(p3)
p1.start(0)
```

## I made this repo just for fun and learn CoR pattern.

There are lots of better way to handle asynchronous, you even can change Koa's onion model (or other framework) to handle asynchronous, I'm just a FE beginner and very interested in it.

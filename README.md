# promise-node

A simple way to handle asynchronous.

## install

```shell
$ yarn add pnode
```

or

```shell
$ npm install --save pnode
```

## usage

Use `.start(param1, param2, ...)` to pass arguments to the first PNode's function.

Use `.next(param1, param2, ...)` to pass arguments to next PNode's function.

### `class` mode

When you using `function () {}`, you can use `this.next()` to resolve this function.

When you using arrow function, you can use `instance.next()` to resolve this function.

```js
import PNode from 'pnode'

const p1 = new PNode(function (a) {
  console.log('start')
  setTimeout(() => {
    console.log(a++)
    this.next(a, 'hah')
  }, 2000)
})
const p2 = new PNode((b, str) => {
  console.log(b, str)
  p2.next(b + str)
})
const p3 = new PNode((c) => {
  setTimeout(() => {
    console.log(c)
    console.log('end')
  }, 1000)
})

p1.setNext(p2).setNext(p3)
p1.start(0)
```

### `fn` mode

When you using this mode, you can only use `instance.next` to resolve this function.

```js
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

## I made this repo just for fun and 装逼 😎.

export class PNode {
  constructor(fn) {
    this.fn = fn
    this.nextNode = null
  }

  setNext(node) {
    return this.nextNode = node
  }

  next(...args) {
    return this.nextNode && this.nextNode.start(...args)
  }

  start(...args) {
    this.fn(...args)
  }
}

Function.prototype.setNext = function (fn) {
  return this.nextFn = fn
}

Function.prototype.next = function (...args) {
  return this.nextFn && this.nextFn(...args)
}

Function.prototype.start = function (...args) {
  this(...args)
}

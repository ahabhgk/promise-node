export default class PromiseNode {
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

  fn() {
    Function.prototype.setNext = function (fn) {
      return this.nextFn = fn
    }

    Function.prototype.next = function (...args) {
      return this.nextFn && this.nextFn(...args)
    }
  }
}

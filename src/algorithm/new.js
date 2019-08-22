// 实现(5).add(3).minus(2)功能
// Number.prototype.add = function (m) {
//   return this.valueOf() + m
// }

// Number.prototype.minus = function (m) {
//   return this.toString() * 1 - m
// }

// console.log((5).add(3).minus(2))

// 实现add(1)(2)(3)
function add (m) {
  const fn = function (n) {
    return add(m + n)
  }

  fn.toString = function () {
    return m
  }

  return fn
}
console.log(add(1)(2)(3))

// 简述一下new一个对象的过程
function _new (fn, args) {
  const p = Object.create(fn.prototype)
  const o = fn.apply(p, args)
  return typeof o === 'object' ? o : p
}

function a (name) {
  this.name = name
}

a.prototype.sayname = function () {
  console.log(this.name)
}

const dog = _new(a, ['dog'])
dog.sayname()

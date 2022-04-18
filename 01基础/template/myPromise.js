function MyPromise(executor) {
  this.PromiseState = 'pending'
  this.PromiseResult = null
  const self = this
  this.callbacks = []
  function resolve(data) {
    if(self.PromiseState !== 'pending') return 
    self.PromiseState = 'fulfilled'
    self.PromiseResult = data
    setTimeout(() => {
      self.callbacks.forEach(item => item.onResolved())
    })
  }
  function reject(data) {
    if(self.PromiseState !== 'pending') return 
    self.PromiseState = 'rejected'
    self.PromiseResult = data
    setTimeout(() => {
      self.callbacks.forEach(item => item.onRejected())
    })
  }
  try {
    executor(resolve, reject) // x
  } catch(e) {
    reject(e)
  }
}
MyPromise.prototype.then = function(onResolved, onRejected) {
  const self = this
  if(typeof onResolved !== 'function') {
    onResolved = value => value
  }
  if(typeof onRejected !== 'function') { // x
    onRejected = reason => {
      throw reason
    }
  }
  return new MyPromise((resolve, reject) => {
    function callback(fn) {
      try {
        const result = fn(self.PromiseResult)
        if(result instanceof MyPromise) {
          result.then(v => resolve(v), r => reject(r))
        } else {
          resolve(result)
        }
      } catch(e) {
        reject(e)
      }
    }
    
    if(self.PromiseState === 'fulfilled') {
      setTimeout(() => {
        callback(onResolved)
      })
    }
    if(self.PromiseState === 'rejected') {
      setTimeout(() => {
        callback(onRejected)
      })
    }
    if(self.PromiseState === 'pending') {
      self.callbacks.push({
        onResolved: () => callback(onResolved),
        onRejected: () => callback(onRejected)
      })
    }
  })
}
MyPromise.prototype.catch = function(onRejected) {
  return this.then(undefined, onRejected)
}
MyPromise.all = function(promises) {
  return new MyPromise((resolve, reject) => {
    let num = 0, arr = [], len = promises.length
    for(let i=0; i<len; i++){
      promises[i].then(v => {
          num++
          arr[i] = v
          if(num === len) resolve(arr)
        }, 
        r => reject(r)
      )
    }
  })
}
MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    for(let i=0; i<promises.length; i++){
      promises[i].then(v => resolve(v), r => reject(r))
    }
  })
}
MyPromise.resolve = function(value) {
  return new MyPromise((resolve, reject) => {
    if(value instanceof MyPromise) {
      value.then(v => resolve(v), r => reject(r))
    } else {
      resolve(value)
    }
  })
}
MyPromise.reject = function(reason) {
  return new MyPromise((resolve, reject) => reject(reason)) // x
}

const p = new MyPromise((resolve, reject) => {
  // reject('err')
  resolve('ok')
  // setTimeout(() => {
  //   resolve('ok')
  // }, 100)
  // throw 'throw'
})
const p1 = p.then().then().then(v => {
  console.info('then', v)
  return new MyPromise((resolve, reject) => resolve('err'))
}, r => {
  console.info('then', r)
  throw 'then-throw'
}).catch(r => {
  console.info('catch', r)
  throw 'throw-reject'
  // return new MyPromise((resolve, reject) => reject('catch-err'))
})
console.info('start')
console.info(p)
console.info(p1)
console.info('end')
const pall = MyPromise.all([p, p1])
console.info('all', pall)
console.info('resolve', MyPromise.resolve(2))
console.info('reject', MyPromise.reject(2))
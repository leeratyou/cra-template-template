/* eslint-disable */
function apply() {
  Array.prototype.first = function(number = 1) {
    const firstOfNumber = this.slice(0, number)
    return firstOfNumber
  }
  
  Array.prototype.log = function(options = {}) {
    const {
      logger = console.log,
    } = options
    
    // console.trace(this)
    logger(this)
    return this
  }
  
  if (!Array.prototype.isEmpty) {
    Object.defineProperty(Array.prototype, 'isEmpty', {
      get: function isEmpty() {
        if (this === null || !Array.isArray(this)) throw new TypeError('Not an array')
        return this.length === 0
      }
    })
  }
  
  console.ln = function(...args) {
    console.log('------ LINES START -------')
    args.forEach((arg, index) => console.log(`ln ${index + 1}:`, arg))
    console.log('------ LINES END -------')
  }
  
}

export const polyfills = {
  apply: () => apply()
}

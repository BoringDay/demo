const Response = require('../util/response')
const { isFunction, isRegExp } = require('../util')
const Rule = require('./rule')
/**
 * @des 路由参数校验
 */
class Param {
  constructor (ctx, params) {
    this.params = params
    this.ctx = ctx
    this.errorMsg = ''
  }

  checkParams () {
    let params = this.params

    for (let i in params) {
      if (!this._validate(i, params[i])) return false
    }

    return true
  }

  _validate (key, rules) {
    for (var i = 1; i < rules.length; i++) {
      if (!this._validateType(key, rules[0], rules[i])) {
        if (this.ctx) {
          let response = new Response(this.ctx)
          response.error({
            code: CODE_PARAM_ERROR,
            msg: this.errorMsg
          })
        }

        return false
      }
    }

    return true
  }

  _validateType (type, val, rule) {
    if (rule === 'require') {
      return this._execRequire(type, val)
    }

    if (isFunction(rule)) return rule(val)

    else if (isRegExp(rule)) return this._execReg(type, val, rule)

    return false
  }
  /**
     * 验证是否为空
     * @param {string} type key
     * @param {any} val     val
     */
  _execRequire (type, val) {
    let flag = !!val && Rule.Reg_Require.test(val)
    if (!flag) this.errorMsg = `${type} can not be empty`
    return flag
  }
  /**
     *
     * @param {string} type  key
     * @param {any} val      val
     * @param {RegExp} rule  正则表达式
     */
  _execReg (type, val, rule) {
    let flag = rule.test(val)
    if (!flag) this.errorMsg = `${type} is invalid`
    return flag
  }
}

module.exports = Param
const staticProperty = {
    Reg_Int: /^[1-9]\d*$/, // 正整数
    Reg_Require: /\S+/, // 非空
    Reg_Phone: /^1(3|4|5|7|8)\d{9}$/, // 手机号码
    Reg_Email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, // 邮箱地址
    Reg_Code: /^\d{6}$/ // 6位数
  }
  
  class Rule {
  
  }
  
  Object.assign(Rule, staticProperty)
  
  module.exports = Rule
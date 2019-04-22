/**
 * 深拷贝
 */
export function deepClone(val){
  let newVal;
  if(val instanceof Array){
    newVal = []
    for(let i=0; i<val.length; i++){
      newVal.push(deepClone(val[i]))
    }
  } else if(val instanceof Object){
    newVal = {}
    for(let i in val){
      newVal[i] = deepClone(val[i])
    }
  } else {
    newVal = val
  }

  // console.log(val instanceof Array,newVal)
  return newVal
}

/**
 * 扫盲
 * 用typeof判断 传进来数组返回 object,放弃,返回值只有"undefined","object","boolean","number","string","symbol","function","object"
 * 用instanceof判断array也属于object,instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
 * arguments.callee 调用自身,避免重名修改太多地方->严格模式下es5禁止了
 * */


/**
 * 参考：
 * typeof: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof
 * instanceof: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
 * arguments.callee：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee
 */
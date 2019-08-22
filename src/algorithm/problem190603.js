// https://github.com/Advanced-Frontend/Daily-Interview-Question
/**
 * 2019-06-03
 * 周一算法题之「两数之和」
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

    你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

    示例：

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */

const nums = [2, 7, 11, 15]
const target = 9
function getIndexs (arr) {
  for (let i in arr) {
    const reset = target - arr[i]

    if (reset === arr[i]) continue

    const index2 = arr.indexOf(reset)
    if (index2 > -1) return [i, index2]
    // 或 (!!~index2) return [i,index2]
  }

  return '404'
}
console.log(getIndexs())

// 改进
function getIndexs2 (arr) {
  return arr.reduce((prev, cur, i) => {
    const index = arr.findIndex(x => x === target - cur)

    return prev || (!!~index && [i, index])
  }, 0)
}

console.log(getIndexs2(nums))
// cd demo/src/algorithm/
// node problem190603

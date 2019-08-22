// https://github.com/Advanced-Frontend/Daily-Interview-Question
/**
 * 2019-06-12
 * 第 88 题：实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
 */
const list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
]

function convert (arr) {
  const newArr = []; const obj = {}
  arr.forEach(element => {
    obj[element.id] = element
  })

  arr.forEach(element => {
    if (element.parentId === 0) {
      newArr.push(element)
    } else {
      const parent = obj[element.parentId]
      parent.children = parent.children || []
      parent.children.push(element)
    }
  })
}

console.log(convert)

// 主要是第一个获取obj用reduce改写
function convert2 (arr) {
  const newArr = []; let obj = {}
  obj = arr.reduce((prev, cur) => (prev[cur.id] = cur, prev), {})

  arr.forEach(element => {
    if (element.parentId === 0) {
      newArr.push(element)
      return
    }
    if (obj[element.parentId]) {
      const parent = obj[element.parentId]
      parent.children = parent.children || []
      parent.children.push(element)
    }
  })
  console.log('newArr', newArr)
}

// convert(list)
convert2(list)

// cd demo/src/algorithm/
// node problem190612

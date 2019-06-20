//https://github.com/Advanced-Frontend/Daily-Interview-Question
/**
 * 2019-06-19
 * 第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
 */

 let list = [{
     id:'1',
     name:'广东省',
     children:[{
         id:'11',
         name:'深圳市',
         children:[{
            id:'111',
            name:'南山区'
        },{
            id:'112',
            name:'福田区'
        }]
     }]
 },
 {
    id:'2',
    name:'云南',
    children:[{
        id:'21',
        name:'昆明市',
        children:[{
           id:'211',
           name:'昆明市某区'
       }]
    }]
}]

 const value = '112'

 //深度优先(deep first search)
 const deepTree = (list,parentId)=>{
    let obj = {}
    for(let i =0;i<list.length;i++){
        let item = list[i]
        obj[item.id] = {
            parentId : parentId || 0,
            id:item.id,
            name:item.name,
        }
        if(item.children) {
            obj = Object.assign(obj,deepTree(item.children,item.id))
        }
    }

    return obj
 }

 //上面改用reduce
const deepTree2 = (list,parentId)=>{
    return list.reduce((prev,cur,i)=>{
        prev[cur.id] = {
            parentId : parentId || 0,
            id:cur.id,
            name:cur.name,
        }

        if(cur.children) {
            prev = Object.assign(prev,deepTree2(cur.children,cur.id))
        }
        return prev
    },{})
}

//递归寻找父级
 const searchParent = (obj,index)=>{
    let arr = [index]
    let parentId = obj[index].parentId
    if(parentId!==0){
        arr = arr.concat(searchParent(obj,parentId)) 
    }

    return arr
 }

 function bfs(target, id) {
    const quene = [...target]
    do {
      const current = quene.shift()
      if (current.children) {
        quene.push(...current.children)
      }
      if (current.id === id) {
        return current
      }
    } while(quene.length)
    return undefined
  }

  function dfs(target, id) {
    const quene = [...target]
    do {
      const current = quene.shift()
      if (current.children) {
        quene.push(...current.children)
      }
      if (current.id === id) {
        return current
      }
    } while(quene.length)
    return undefined
  }

 const fn = (value)=>{
    // console.log(searchParent(deepTree(list),value))
    // console.log(searchParent(deepTree2(list),value))
    console.log(bfs(list,value))
 }

 fn(value)
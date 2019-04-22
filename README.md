# 记录学习demo

1.webpack4 

    https://juejin.im/post/5b3daf2ee51d451962727fbe

安装出现的问题：  

** 在使用HtmlWebPackPlugin的时候,报index.html找不到的错误，是因为忘了加上了html-loader了  
** 跑npm提示 Unexpected end of JSON input 可以执行npm cache clean --force解决

## 文件目录  
```
src
|   index.js(入口函数)
|   index.html(入口界面)
|  
└───algorithm (算法)  
|      |
|      └───bubbleSort(冒泡排序,鸡尾酒排序)
|  
└───util(工具函数)
       |
       └───deepClone(深拷贝)
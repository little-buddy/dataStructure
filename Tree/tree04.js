const title = "设计算法，求二叉树的结点个数"

// 这种题 首先选一种遍历方法，然后遍历一遍就好了

const root = require('./tree').createDCTree()
function postOrder(tree,fn){
  if(!tree){
    return
  }
  let bt = tree
  const stack = []
  let top = -1
  while(bt||top!=-1){
    while(bt){
      bt.flag = 0
      stack[++top]=bt
      bt=bt.lchild
    }
    while(top!=-1&&stack[top].flag){
      bt = stack[top--]
      fn()
      if(bt==tree){
        bt=null
      }
    }
    if(top!=-1){
      bt=stack[top]
      bt.flag =1
      bt=bt.rchild
    }
  }
}

let i=0
postOrder(root,()=>{i++})
console.log(i)

// 一旦增加了类型，你就没法 自由自在 的在 obj 里面添加内容了
// 查找到点，然后执行遍历
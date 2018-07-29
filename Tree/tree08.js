const title = "以二叉链表为存储结构，编写算法求二叉树中结点X的双亲"

// 先查找到那个元素，然后operator，前序

const tree = require('./tree').createDCTree()

function findParentByX(tree,x){
  const set = []
  // 非独立方法，依托于执行块
  function findSet(node,parent){
    if(!node){
      return
    }
    if(node.data===x){
      set.push(parent)
    }
    arguments.callee(node.lchild,node)
    arguments.callee(node.rchild,node)
  }
  findSet(tree,null)
  return set
}
console.log(findParentByX(tree,'E'))

// 为 null 的双亲 是 根结点
// 可以按层次初始化一个序列

// 匿名函数时没有 callee的

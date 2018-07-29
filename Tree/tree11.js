const title = `编写算法。交换二叉树中的所有节点的子树`

// 关键用什么遍历方法，取决于树的存储结构，这个题描述的很不清楚
// type root = {
//   data,
//   left,
//   right
// }

const tree = require('./tree').createDCTree()

function change(node){
  if(!node.lchild&&!node.rchild){
    return
  }
  
  const temp = node.lchild
  node.lchild=node.rchild
  node.rchild=temp
  change(node.rchild)
  change(node.lchild)
}
change(tree)
console.log(tree)

// FIXME: 无非遍历执行
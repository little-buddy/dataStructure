const title = `编写算法。交换二叉树中的所有节点的子树`

// 关键用什么遍历方法，取决于树的存储结构，这个题描述的很不清楚
const root = {
  data,
  left,
  right
}

function change(node){
  if(!node.left&&!node.right){
    return
  }
  const temp = change(node.right)
  node.right = change(node.left)
  node.left=temp
  temp=null
}

// FIXME: 无非遍历执行
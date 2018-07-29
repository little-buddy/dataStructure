const title = `编写算法，要求输出二叉树后序遍历序列的逆序`


// 二叉树的后序遍历 是先访问 左子树 再访问 右子树 再 根结点

// 那么它的逆序序列 根结点 -> 右子树 -> 左子树

const tree = require('./tree').createDCTree()
function traverseReverse(tree){
  if(!tree){
    return
  }
  let bt = tree
  let stack = []
  let top = -1
  while(bt||top!=-1){
    while(bt){
      console.log(bt.data)
      stack[++top]=bt
      bt=bt.rchild
    }
    if(top!=-1){
      bt=stack[top--]
      bt = bt.lchild
    }
  }
}
traverseReverse(tree)
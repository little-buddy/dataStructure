const title = "设计算法，按前序次序打印二叉树中的叶子结点"

const root = require('./tree').createDCTree()
function printLeaf(tree){
  if(!tree){
    return
  }
  let bt = tree
  const stack = []
  let top = -1
  while(bt||top!==-1){
    while(bt){
      if (!bt.rchild && !bt.lchild) {
        console.log(bt)
      }
      stack[++top]=bt
      bt=bt.lchild
    }
    if(top!==-1){
      bt=stack[top--]
      bt=bt.rchild
    }
  }
}

// 叶子结点？ 度为0是叶子结点
// 遍历每个结点，判断左右子树是否存在
printLeaf(root)

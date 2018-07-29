const title = "以二叉链表为存储结构,在二叉树中删除以值X为根结点的子树"
//  lchild|data|rchild

// 这题有2种z理解意思，就是删除这个结点下面的子树，或者说连这个结点都删除
// 这应该是一种静态检测，运行时是无法检测出类型的

// JS 中 NULL 表示释放该单元
// 这种遍历模式 一定是至上而下的

const tree = require('./tree').createDCTree();
// type
(function(root,value){
  if(!root){
    return;
  }
  if(root.data===value){
    console.warn('The value equal root of tree')
    return;
  }
  // type
  const bt = root
  _delete(bt.lchild,bt,0)
  _delete(bt.rchild,bt,1)
  
  // type
  function _delete(root,rootParent,flag){
    if(!root){
      return;
    }
    if(root.data===value){
      if(flag){
        rootParent.rchild=null
      }else{
        rootParent.lchild=null
      }
    }
    arguments.callee(root.lchild,root,0)
    arguments.callee(root.rchild,root,1)
  }
})(tree,'B')
console.log(tree)
// TODO: 如果用栈去处理这个算法，该怎么做？

// 假设，我们要删除的是 带根结点的 这一整棵子树，既需要找到它的父节点与它之间的关系，然后删除
// 1、遍历找到集合 -> 再遍历 删除
// 2、记录结点关系，删除

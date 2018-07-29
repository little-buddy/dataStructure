// @flow
const title = "非递归 ${树} 遍历算法"

const {createDCTree:createTree}= require("./tree")
// TODO: 一切都是以 根结点 作为 驱动点的
// TODO: 遍历可以统一成一个函数，他们初始化是一致的

// 前序
const root1 = createTree()
function preOrder(tree){
  if(!tree){
    return
  }
  let bt = tree
  const stack = []
  let top = -1
  while(bt||top!==-1){
    while(bt){
      console.log(bt.data)
      stack[++top] = bt
      bt = bt.lchild
      
    }
    if(top!==-1){
      bt=stack[top--]
      bt=bt.rchild
    }
  }
}
// console.log(preOrder(root1))
// 中序
const root2 = createTree()
function inOrder(tree){
  if(!tree){
    return
  }
  let bt = tree
  const stack = []
  let top = -1
  while(bt||top!==-1){
    while(bt){
      stack[++top] = bt
      bt = bt.lchild
    }
    if(top!==-1){
      bt=stack[top--]
      console.log(bt.data)
      bt = bt.rchild
    }
  }
}
// console.log(inOrder(root2))

// 后序

// 这里就涉及到一个点，就是参数的校验现在是全留给 flow吗？好像也没有内部输入啊，是不是意味着可以少些一些参数校验了

// 不写 好像就是 var
// JS 中数组是不安全的，所以访问的时候又必须要写成 type|void 的形式
// type[] Array<type>
  

const root3 = createTree()
function postOrder(tree) {
  if (!tree) {
    return
  }
  const stack = []
  let top = -1
  let bt = tree
  while (bt || top != -1) {
    while (bt) {
      bt.flag = 0
      stack[++top] = bt
      bt = bt.lchild
    }
    while (top != -1 && stack[top].flag) {
      bt = stack[top--]
      console.log(bt.data)
      if (bt === tree) {
        bt = ''
      }
    }
    if (top != -1) {
      bt = stack[top]
      bt.flag = 1
      bt = bt.rchild
    }
  }
}
// console.log(postOrder(root3))

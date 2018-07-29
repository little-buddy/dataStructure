// @flow
const title = `非递归 ${树} 遍历算法`

// TODO: 一切都是以 根结点 作为 驱动点的
// TODO: 遍历可以统一成一个函数，他们初始化是一致的

// 前序
function preOreder(root:myNode){
  let bt: myNode|null = root
  const stack:Array<myNode> = []
  let top:number = -1
  while(bt!==null&&top!==-1){
    while(bt!==null){
      console.log(bt.data)
      bt = bt.lchild
      stack[++top] = bt
    }
    if(top!==-1){
      bt=stack[top--]
      bt=bt.rchild
    }
  }
}

// 中序
function inOrder(root:myNode){
  let bt:myNode|null = root
  const stack:Array<myNode> = []
  let top:number = -1
  while(bt!==null&&top!==-1){
    while(bt!==null){
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

// 后序

// 这里就涉及到一个点，就是参数的校验现在是全留给 flow吗？好像也没有内部输入啊，是不是意味着可以少些一些参数校验了
function postOrder(root:myNode){
  // 不写 好像就是 var
  let bt:myNode|null = root
  // JS 中数组是不安全的，所以访问的时候又必须要写成 type|void 的形式
  // type[] Array<type>
  const stack:Array<myNode> = []
  let top:number = -1
  const flag = []
  while(bt!==null&&top!=-1){
    while(bt!==null){
      stack[++top] = bt
      bt = bt.lchild
    }
    if(top!=-1){
      if(flag[top]){
        bt=stack[top--]
        console.log(bt.data)
      }
      bt = stack[top].rchild
      flag[top] = true
    }
  }
}

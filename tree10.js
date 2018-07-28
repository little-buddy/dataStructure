const title = `一棵具有 ${N} 个结点的二叉树采用顺序存储结构，编写算法对该二叉树进行前序遍历`

//  顺序存储结构  就是用一个数组去存想象中的满二叉树，不存在就用null表示
{
  const arr = new Array(n)

  const bt = 0
  let top = -1
  const stack = new Array(n)

  while(arr[bt]!=null&&top!=-1){
    while(arr[bt]!=null){
      console.log(arr[bt])
      stack[++top]=bt
      bt = 2 * i + 1
    }
    if(top!=-1){
      bt=[top--]
      bt=arr[2*bt+1]
    }
  }
}
// 这就是一个前序遍历

// 这样也可以的
function preOrder(i){
  if(!arr[i]){
    return;
  }
  console.log(arr[i])
  preOrder(arr[2*i+1])
  preOrder(arr[2*(i+1)])
}



// TODO: 在处理这类题的时候，我的第一反应就是，有事没事先遍历嘛
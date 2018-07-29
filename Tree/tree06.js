// const title = `编写算法求二叉树的深度`

//  我觉得使用 top 应该是可以的
const root = require('./tree').createDCTree()


// 非递归 广度优先遍历 --这种遍历思想在 图 中有介绍
function getDegree(tree){
  if(!tree){
    return 0
  }
  let num = 0
  let queue = [tree]
  while(queue.length){
    const _queue = []
    num++
    for(let i=0;i<queue.length;i++){
      const node = queue[i]
      if(node.lchild){
        _queue.push(node.lchild)
      }
      if(node.rchild){
        _queue.push(node.rchild)
      }
    }
    queue=_queue
  }
  return num
}

// console.log(getDegree(root))



// 递归recursion
function _getDegree(tree){
  if(!tree){
    return 0
  }
  if(tree.lchild&&tree.rchild){
    return 1
  }
  return Math.max(arguments.callee(tree.lchild),arguments.callee(tree.rchild))+1
}

/* 
  【题外】
    广度优先遍历：
      类似于树的层序遍历
      从图中某个顶点出发进行广度优先遍历的基本思想
      1、访问顶点 v
      2、一次访问顶点v的各个未被访问的邻接点 v1、v2、v3...vK
      3、分别 从 v1、v2、v3...vk 出发，访问他们未被访问的邻接点，
      并使先被访问的邻接点 先于 后被访问的邻接点，知道图中所有有效顶点都被访问
 */


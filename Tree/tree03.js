
const title = "W=(2,1,4,5,7,3,4,9) 对哈夫曼树进行 [0,1] 编码，该字符至少有多少位"

// 带权值路径长度
// 1 2 3 4 4 5 7 9 
const nodeSet = require('./tree').createLeafNode([2,1,4,5,7,3,4,9])

// 在 C语言中，如果用顺序存储结构，会有一个 fron rear 的指针
function createNode(data, lchild, rchild) {
  return {
    data,
    lchild,
    rchild
  }
}

/* 
  type set = Array<node>
  type node = {
    data:number,
    lchild:node,
    rchild:node
  }
 */

//  这个set需要进行 排序

// custom implement
function getCodelengthMin(set){
  let degree = 0
  let front = -1
  let rear=set.length-1
  let queue = set
  queue.sort((a,b)=>{
    const $1 = a.data
    const $2 = b.data
    if($1>$2){
      return 1
    }else if($1<$2){
      return -1
    }else{
      return 0
    }
  })

  while(rear!=-1){
    let p = -1
    while(front!=rear){
      const left = queue[++front]
      const right = queue[++front]
      queue[++p] = createNode(left.data + right.data,left,right)
    }
    if(!front%2){
      queue[++p]=queue[rear]
    }
    front=-1
    rear = p||-1
    degree++
  }
  return degree
}
console.log(getCodelengthMin(nodeSet))

// 满足 huffTree 的情况下，结点的个数的 Math.floor(logN+1) 就是最短编码值

// 它这里所谓的编码长度，是所有编码个数的总和，并不是最大的编码位数

// 对于 任意树的实现我们都可以通过 2种方式
  // 1、直接建立结点联系
  // 2、通过数组存储，之间记录下标的形式去存储
/* @flow */

const title = "以孩子兄弟表示法做存储结构，求 ${ 树 } 中结点X的第I个孩子"

// typedef struct Node{
//   int data,
//   int * brother,
//   int * child,
// }

// Node getChild(Node * node,int size){
//      if(Node == NULL){
//          cout<<"The param is NULL"
//          return;
//      }
//      Node child = node.child
//      for(int i=1;i<=size;i++){
//         if(i==size||child==null){
//             break;
//         }
//         child=child.brother
//      }
//      if(i==size&&child!=NULL){
//          return child
//      }
//     cout<<"The node child of length no more than"<<size
//      return;
//  }

// 关键是 node 的命令行 不好吃字符，似乎都是把多次输入的放在一个字符串中

// 所以对于一般情况，我们不会拿一个空值和空数组作为返回，而是直接一个 undefined的值不然，这个题没法做了
// 这题的前提一定是树已经存在了，参数就是 【 结点 + i 孩子 】

/*
type Node ={
  data:any,
  child:any,
  brother:any
}
*/

// 对于左右孩子的树来说，递归算法可以解决问题
// 对于非左右孩子表示的树，就需要用到非递归遍历方法

// 我们需要遍历的是兄弟孩子结点表示法
function findSet(root:Node,value:number){
  const result = []
  const stack = []
  let bt = root
  let top = -1
  while(bt&&top!=-1){
    while(bt){
      if(bt.data == value){
        result.push(bt)
      }
      bt = bt.brother
      stack[++top]=bt
    }
    if(top!=-1){
      bt=stack[top--]
      bt=bt.child
    }
  }
  return result
}

function findI(node:Node,size:number){
  if(!node){
    return;
  }
  const _node = node.child
  let i=0
  for(;i<size;i++){
    if(i==size||!_node){
      break;
    }
    _node=_node.borther
  }
  if(i==size&&!_node){
    console.log(_node,`find no.${size} child`)
  }
}

// traverse
// 对于一个 tree 来说，我们要选择一种遍历方式
function getChild(node:Node,value:number,size:number){
  const validNode = findSet(Node,value)
  validNode.forEach((node,index)=>{
    findI(node,size)
  })
}
// FIXME: I support the flow. I think flow is beautiful.

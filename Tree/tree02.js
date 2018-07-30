const title = "对给定一组键值 W=[5,2,9,11,8,3,7]，试构造相应的哈弗曼树，并计算它的带权值路径长度"

// 带权值路径长度 路径长度 * 权值，总不会先构建再遍历相乘 吧
// 那要在构建的过程中就把它求出来？

/* 
    type node = {
      data : number,
      parent : node
      lchild : node
      rchild : node
    }
 */

//  这是一个双亲孩子表示法
 const W = [5,2,9,11,8,3,7]
 const huffTree = []
 for(let i=0;i<W.length;i++){
  huffTree[i] = {
    data : W[i],
    parent : -1,
    lchild : -1,
    rchild : -1,
    set : [{data:W[i],num:0}] 
  } 
 }

//  如果找一个权值最小的，然后再找一个权值较小的
 function select(huffTree,arr=[0,0]){
   let [i1,i2] = arr
   for(let i=1;i<huffTree.length;i++){
     if(!huffTree[i].parent){
       let compare = i
      if (huffTree[i].data > huffTree[i1].data) {
        compare = i1
        i1 = i
      }
      if(i===1){
        i2=compare
      }
      if(huffTree[compare]>huffTree[i2].data){
        i2 = compare
      }
     }
   }
 }
const n = huffTree.length
 function create(){
   for(let k =n;k<2*n-1;k++){
     const arr = [0,0]
     select(huffTree,arr)
     const [i1,i2] = arr
     huffTree[i1].parent = k
     huffTree[i2].parent = k
     huffTree[k].parent = -1
     huffTree[k].data = huffTree[i1].data+huffTree[i2].data
     huffTree[k].lchild = -1
     huffTree[k].rchild = -1
     huffTree[k].set
     if(!set){
       huffTree[k].set = [...huffTree[i1].set.forEach(obj => obj.num++), ...huffTree[i2].set.forEach(obj => obj.num++)]
     }
   }
   huffTree[2*n-2].set.reduce((final,obj)=>{
     return final + obj.num*obj.data
   },0)
 }
// 通过 构建父节点的时候，输入当前的权值以及长度，最终在根结点获取到 各结点的权值路径，从而求和
//  不用ES6写 代码。真的累的
//  只是构造了一棵树，带权值的路径长度该怎么求？

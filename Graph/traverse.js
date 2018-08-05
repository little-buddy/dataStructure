// depth-first traversel、

function depthT(){

  // 1、从顶点数组中取出一个未被遍历且最小的下标
  // 2、从这个下标点取出未被遍历的邻接点中
  // 3、重复步骤2，直到某个点被遍历过了
  // 4、重复步骤1、直到所有点都被遍历

}

// breadth-first traversal
function breadth() {
  // 1、从顶点数组中取出一个未被遍历且最小的小标
  // 2、遍历所有该点的邻接点，并存储被遍历点的所有邻接点与队列中
  // 3、重复步骤二，直到队列为空
  // 4、重复步骤1，直到所有点呗访问
}

template<class DataType>
void MGraph<DataType>::DSFTraverse(int v){
  front = rear = -1;
  cout<<vertex[v];visited[v]=-1;Q[++rear]=v;
  while(front!=rear){
    v=Q[+=front]
    for(j=0;j<vertexNum;j++){
      if(arc[i][j]==1&&visited[j]==0){
        cout<<vertex[j];visited[j]=1;Q[++rear]=j;
      }
      )
    }
  }
}
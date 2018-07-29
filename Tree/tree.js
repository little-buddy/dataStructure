const mock = ['A', 'B', 'C', '', 'D', 'E', '', '', '', 'F', '', '', 'G', '', '']

// 双孩子表示
const createDCTree = function() {
  function createNode(i) {
    if (!mock[i]) {
      return ''
    }
    return {
      data: mock[i],
      lchild: createNode(2 * i + 1),
      rchild: createNode(2 * i + 2)
    }
  }
  return createNode(0)
}

//  孩子兄弟表示
const createBCTree = function(){
  return  {
      data:'A',
      brother:'',
      child: {
        data:'B',
        brother: {
          data:'C',
          brother:'',
          child: {
            data:'E',
            brother:'',
            child: {
              data:'G',
              brother:'',
              child:'',
            },
          },
        },
        child: {
          data:'D',
          brother:'',
          child: {
            data:'F',
            brother:'',
            child:'',
          },
        },
      },
    }
}


module.exports = {
  createDCTree, // double child
  createBCTree  // parent child 
}
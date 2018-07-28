'use strict';

function getChild(node, size) {
  if (!node.child) {
    console.log('......');
    return null;
  }
  var child = node.child;
  var i = 1;
  for (; i <= size; i++) {
    if (i == size || !child.brother) {
      console.log(3);
    }
    child = child.brother;
  }
  if (i == size && !!child) {
    return child;
  }

  return null;
}


getChild({
  data: '',
  child: '',
  brother: ''
}, 2);

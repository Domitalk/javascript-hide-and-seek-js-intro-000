function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var currentNode = document.getElementById('grand-node');
  var notUndefined = currentNode.querySelector('div');
  while (notUndefined) {
    currentNode = notUndefined;
    notUndefined = currentNode.querySelector('div');
  }
  return currentNode;
}

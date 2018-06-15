function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  var factor = parseInt(n)

  const rankedList = document.getElementById('app').querySelectorAll(".ranked-list li")
  for(var i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + factor
  }
}

function deepestChild(){
  var current = document.querySelector('#grand-node')
  var prev
  while(current){
    prev = current
    current = current.querySelector('div')
  }
  return prev
}

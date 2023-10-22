// traversing DOM tree 

const rootNode = document.getRootNode()
console.log(rootNode)


// child traversing 
const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode.childNodes)
const headNode = htmlElementNode.childNodes[0]
const bodyNode = htmlElementNode.childNodes[2]

// parent traversing 
console.log(htmlElementNode.parentNode)

// sibling traversing
console.log(headNode.nextSibling)



const  ans = document.querySelector("div.container h1")
const ans2 = ans.parentNode
ans2.style.backgroundColor = "yellow"
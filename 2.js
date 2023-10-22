// change text 
// textContent and innerText


// textContent

const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.textContent) // in output this will give all the text which is display none also means hidden texts also

mainHeading.textContent = "sample heading"
console.log(mainHeading.textContent)

// innerText
// the difference between textContent and innerText is innerText will not give hidden texts

const mainHeading2 = document.getElementById("main-heading")
console.log(mainHeading2.innerText) 


// callback hell

const heading = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")


setTimeout(()=>{
   heading.textContent = "heading 1"
   heading.style.color = "blue"
   setTimeout(()=>{
     heading2.textContent = "heading 2"
     heading2.style.color = "violet"
     setTimeout(()=>{
        heading3.textContent = "heading 3"
        heading3.style.color = "violet"
        setTimeout(()=>{
            heading4.textContent = "heading 4"
            heading4.style.color = "violet"
            setTimeout(()=>{
                heading5.textContent = "heading 5"
                heading5.style.color = "violet"
                setTimeout(()=>{
                    heading6.textContent = "heading 6"
                    heading6.style.color = "violet"
                  },1000)
              },1000)
          },1000)
      },1000)
   },1000)
},1000)
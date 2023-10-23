const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url).then((response)=>{
   return response.json()
}).then((data)=>{
    console.log(data)
})

// we know we can not use catch method in fetch so we use if else to get the errors

fetch(url).then((response)=>{
    if(response.ok){
        return response.json()
    }else{
        throw new Error("something went wrong")
    }
 }).then((data)=>{
     console.log(data)
 })

//  post method 

fetch(url,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response)=>{
    if(response.ok){
        return response.json()
    }else{
        throw new Error("something went wrong")
    }
 }).then((data)=>{
     console.log(data)
 })

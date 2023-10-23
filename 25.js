const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr)

xhr.open("GET",url)

// first method to retrieve data 

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response)
//         console.log(data)
//     }
// }

// second method to retrieve data 

xhr.onload =()=>{
    const data = JSON.parse(xhr.response);
    console.log(data);

}

// error handeling

xhr.onload =()=>{
    if(xhr.status >= 200 && xhr.status <300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }else{
        console.log("something wrong");
    }

}

xhr.onerror = () =>{
    console.log("network error");
}


xhr.send();
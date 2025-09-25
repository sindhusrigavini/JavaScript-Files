// let user_container=document.getElementById("userdata")
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(function(response){
//     return response.json()
// })
// .then(function(jsondata){
//     console.log(jsondata)
//     for(let i=0;i<jsondata.length;i++){
//         let card=document.createElement("div")
//         card.innerHTML=`
//             <p>${jsondata[i].id}</p>
//             <p>${jsondata[i].title}</p>
//         `         
//         user_container.appendChild(card)

//     }
// })




// let user_container=document.getElementById("userdata")
// fetch("https://dummyjson.com/products")
// .then(function(response){
//     return response.json()
// })
// .then(function(jsondata){
//     console.log(jsondata.products)
//     for(let i=0;i<jsondata.products.length;i++){
//         let card=document.createElement("div")
//         card.innerHTML=`
//             <p>${jsondata.products[i].id}</p>
//             <p>${jsondata.products[i].title}</p>
//             <img src="https://thf.bing.com/th/id/OIP.SRc4VERhlykH_JOQ5uX47gHaEl?w=275&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"/>
//         `     //<img src='${jsondata.products[i].image}'/>    
//         user_container.appendChild(card)

//     }
// })



// let user_container=document.getElementById("userdata")
// fetch("https://gorest.co.in/public/v2/users")
// .then(function(response){
//     return response.json()
// })
// .then(function(jsondata){
//     console.log(jsondata)
//     for(let i=0;i<jsondata.length;i++){
//         let card=document.createElement("div")
//         card.classList='card'
//         card.innerHTML=`
//             <p>${jsondata[i].id}</p>
//             <p>${jsondata[i].name}</p>
//             <p>${jsondata[i].email}</p>
//             <p>${jsondata[i].gender}</p>
//         `
//         user_container.appendChild(card)
//     }
// })


To POST

// let user={
//         "id":5846454,
//         "name": "Sindhu",
//         "email": "sindhusrigavini@gmail.com",
//         "gender": "female",
//         "status": "active"
// }
// fetch("https://gorest.co.in/public/v2/users",
// {
//     method:'POST',
//     headers:{
//         "Content-type":"application/json",
//          Accept:"application/json",
//          Authorization:"......."////Rest api Authorization
//     },
//     body:JSON.stringify(user) 
// })

// .then(function(res){ //res is response
//     return res.json()
// })
// .then(function(jsondata){
//     console.log(jsondata)
// })

To PUT

// let new_user={
//         "name": "sri",
//         "email": "sindhusrisrigavini@gmail.com",
//         "gender": "female",
//         "status": "active"
// }
// fetch("https://gorest.co.in/public/v2/users/5846454",options)
// let options={
//     method:'PUT',
//     headers:{
//         "Content-type":"application/json",
//         Accept:"application/json",
//         Authorization:"......"////Rest api Authorization
//     },
//     body:JSON.stringify(new_user) 
// }
// .then(function(res){
//     return res.json()
// })
// .then(function(jsonresponse){
//     console.log(jsonresponse)
// })

To PATCH

// let new_user2={
//         "name": "gavini",
//         "email": "sindhusrisrigavini@gmail.com",
//         "gender": "female",
//         "status": "inactive"
// }
// fetch("https://gorest.co.in/public/v2/users/5846454",options1)
// let options1={
//     method:'PATCH',////similar to put changing small changes of put
//     headers:{
//         "Content-type":"application/json",
//         Accept:"application/json",
//         Authorization:"......"////Rest api Authorization
//     },
//     body:JSON.stringify(new_user) 
// }
// .then(function(res){
//     return res.json()
// })
// .then(function(jsonresponse){
//     console.log(jsonresponse)
// })

To DELETE
getallusers



let user_container=document.getElementById("userdata")

let name_ele=document.getElementById("name")
let email_ele=document.getElementById("email")
let gender_ele=document.getElementById("gender")
let status_ele=document.getElementById("status")

let URL="https://gorest.co.in/public/v2/users"
function getAllusers(){
fetch("https://gorest.co.in/public/v2/users",{
    method:'GET',
    headers:{
            Authorization:"......"
        },
})
.then(function(response){
    return response.json()
})
.then(function(jsondata){
    console.log(jsondata)
    for(let i=0;i<jsondata.length;i++){
        let card=document.createElement("div")
        card.innerHTML-""
        card.classList='card'
        card.innerHTML=`
            <p>${jsondata[i].id}</p>
            <p>${jsondata[i].name}</p>
            <p>${jsondata[i].email}</p>
            <p>${jsondata[i].gender}</p>
        `
        user_container.appendChild(card)
    }
})
}

function deleteUser(id){
    fetch(`https://gorest.co.in/public/v2/users/${id}`,{
        method:"DELETE",
        headers:{
            Authorization:"......"
        }
    }).then(function(res){
        if(res.status==204){
            getAllusers()
        }
    })
}


function AddUser(){
    let user_data={
    name:name_ele.value,
    email:email_ele.value,
    gender:gender_ele.value,
    status:status_ele.value
}
console.log(user_data)
    fetch(URL, {
        method:"POST"
        body:JSON.stringify(user_data),
        headers:{
            "Content-type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer Token"
        }})
        .then(function(res){
        return res.json()
    })
    .then(function(jsondata){
        getAllusers()
    })
}
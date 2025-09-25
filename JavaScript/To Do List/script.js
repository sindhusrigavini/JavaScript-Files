let user_data = document.getElementById("user_input")
let container = document.getElementById("local_container")
let store_data = localStorage.getItem("user_data")
local_container.textContent = store_data

// function Addtostore(){
//     local_container.textContent=local_container.textContent+" "+user_data.value
//     localStorage.setItem("user_data",local_container.textContent)
//     user_data.value="" //Input types values like input or textarea
// }

// //onevent listener
// let stored_btn=document.getElementById("store_btn")
// stored_btn.onclick = Addtostore;

//addEventListener
// let stored_btn=document.getElementById("store_btn")
// stored_btn.addEventListener("click",Addtostore);

///===============================================///

//  Events

// function Addtostore(event){
//     if(event.key=="Enter" || evnt.key=="Shift")////if(event.key=="Enter" || evnt.key=="Control")////if(event.ctrlkey && evnt.key=="Enter")
// {
//         local_container.textContent=local_container.textContent+"\n"+user_data.value
//         localStorage.setItem("user_data",local_container.textContent)
//         user_data.value="" //Input types values like input or textarea
//     }
// }
// user_data.addEventListener("keydown",Addtostore)
// //user_data.addEventListener("keyup",Addtostore) more and more events Mouse Events,Touch Events


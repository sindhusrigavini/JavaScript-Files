let Image=document.getElementById('missile')
let Timer=setTimeout(function(){
    Image.src="https://media.istockphoto.com/id/494853349/photo/fire-in-the-city-overview.jpg?s=612x612&w=0&k=20&c=J9w2-ys_Y79cblBJJgw9Ybtw2QrL4ZiSLf39jE77pW0="
},7000)

let h2=document.createElement("h2")
h2.textContent="What is the Output 2+5="

let input_text=document.createElement("input")
document.body.appendChild(h2)
document.body.appendChild(input_text)

let btn=document.createElement('button')
btn.textContent="save"
btn.onclick=function(){
    if(input_text.value==7){
        clearTimeout(Timer)
        Image.src="https://thf.bing.com/th/id/OIP.YKSmIjjfznr7CrIosgAUtgHaEJ?w=274&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
    }
}
document.body.appendChild(btn)
document.getElementById('heading').style.color='olive'
function clicksubmit(){
    const myImage = new Image(300, 300);
    myImage.src = "https://media4.giphy.com/media/y1ZBcOGOOtlpC/200w.gif?cid=6c09b952vt8a2jnfy27woy18h9kplu0dm6otbaki34cz3932&ep=v1_gifs_search&rid=200w.gif&ct=g";
    document.body.appendChild(myImage);
    let userName = document.getElementById('name').value;
    document.getElementById('message').textContent=userName+' Your account is verifing.....'
}

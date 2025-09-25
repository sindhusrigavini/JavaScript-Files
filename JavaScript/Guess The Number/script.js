let randomNumber=Math.random()*100
randomNumber=Math.ceil(randomNumber)
function Guessthenumber(){
    let currentValue=document.getElementById('user_input').value
    currentValue=parseInt(currentValue)
    if(currentValue==randomNumber){
        document.getElementById('message').textContent='Your guessing number is correct!!!'
    }else if(currentValue>randomNumber){
        document.getElementById('message').textContent='Your guessing number is too high!Try again'
    }else if(currentValue<randomNumber){
        document.getElementById('message').textContent='Your guessing number is too low!Try again'
    }else{
        document.getElementById('message').textContent='Please enter a valid number'
    }
}
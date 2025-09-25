let parent = document.getElementById("parent");
let child = document.getElementById("child");
let sub_child = document.getElementById("sub_child");
parent.addEventListener("click", function(){
    console.log("Parent Clicked");
})
child.addEventListener("click", function(){
    console.log("Child Clicked");
})      
sub_child.addEventListener("click", function(){
    console.log("Sub Child Clicked");
})
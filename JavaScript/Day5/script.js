//Control Statements
//Control statemnets are two types
//1. Conditional Statements
// a. if
// b. if...else         
// c. if...else if...else
// d. switch    
//2. Loops Statements
// a. for
// b. while                 
// c. do...while
// d. for...in      
// e. for...of


//Conditional Statements
//1. if

// var a=prompt("Enter a number");
// if(a>0){
//     console.log("a is a positive number");
// }
// alert('if block executed');

//2. if...else

// var a=prompt("Enter a number");
// if(a>0){ 
//     console.log("a is a positive number");
// }    
// else{
//     console.log("a is a negative number");
// }

// 3. if...else if...else

// var a=prompt("Enter a number");
// if(a>0){
//     console.log("a is a positive number");
// }        
// else if(a<0){
//     console.log("a is a negative number");   
// }
// else{        
//     console.log("a is zero");
// }

// 4. switch

// var a=prompt("Enter a number between 1 to 7");
// switch(a){
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;  
//     case '5':
//         console.log('Friday');
//         break;  
//     case '6':   
//         console.log('Saturday');
//         break;      
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Invalid input');
// }

//Loops Statements

//1. for

// for(var i=1;i<=5;i++){
//     console.log(i);      
// }

// 2. while

var i=1;
while(i<=25){
    console.log(i);
    i++;
}  

// 3. do...while

var j=2;
do{
    console.log(j);              
    j=j+2;
}
while(j<=20);
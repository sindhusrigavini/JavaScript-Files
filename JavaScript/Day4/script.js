//Arithmetic Operators

var a=30;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//Direct increment and  prints(pre incrementor decrementor)
// var a=30;
console.log(++a);  
console.log(a);

var a=30;
console.log(--a);  
console.log(a);

//first print then increment(post incrementor decrementor)
var a=30;
console.log(a++);  
console.log(a);

var a=30;
console.log(a--);   
console.log(a);

//Direct increment and  prints(pre incrementor decrementor)
var b=20;
console.log(--b);    
console.log(b);

var b=20;
console.log(++b);    
console.log(b);

//first print then increment(post incrementor decrementor)
var b=20;
console.log(b++);  
console.log(b);  

var b=20;
console.log(b--);  
console.log(b);

//Assignment Operators

var a=10;
a+=20;
console.log(a);

var b=20;
b-=10;
console.log(b);

var c=5;
c*=2;           
console.log(c);

var d=10;
d/=2;           
console.log(d);

// Comparison Operators

var a =10;
var b =20;
console.log(a==b);  //false
console.log(a!=b);  //true
console.log(a>b);   //false
console.log(a<b);   //true   

var a=10;
var b='10';
console.log(a==b);  //true
console.log(a!=b);  //false
console.log(a===b);  //false //data type and value should be same
console.log(a!==b);  //true                     
console.log(a>=b);   //true
console.log(a<=b);   //true 

//Logical Operators

console.log(true && true);   //true
console.log(true && false);  //false
console.log(false && true);  //false        
console.log(false && false); //false        
console.log(true || true);   //true
console.log(true || false);  //true 
console.log(false || true);  //true        
console.log(false || false); //false            
console.log(!true);          //false
console.log(!false);         //true

var c=10;
var e=20;
console.log(c<e && e<c);   //true 
console.log(c>e || e>c);   //true
console.log(c<e && e<c);   //false
console.log(c>e || e<c);   //false
console.log(!(c<e));       //false
console.log(!(e>c));       //false  
console.log(!(c>e));       //true
console.log(!(e<c));       //true   
console.log(!(c==e));      //true
console.log(!(c!=e));      //false          

//Ternary Operators

let a=18;
let b=24;
let vote=(a>=18)?"eligible to vote":"not eligible to vote";
console.log(vote);          //eligible to vote
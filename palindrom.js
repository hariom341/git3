let str= "aabaa";
let bag = 0;


for ( i =0 ; i <str.length; i++){
bag = str[i]+bag;
}
 if ( str ==bag){
   console.log( "Palindrome");
   
 }
else {
  console.log("not palindrome")
}
// console.
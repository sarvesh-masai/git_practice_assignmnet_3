let str= "lol";
let empty="";
for(let i=str.length-1; i>=0; i++){
empty+=str[i];
}
(empty==str)? console.log("Palindrome"): console.log("Not"):  // here is the error
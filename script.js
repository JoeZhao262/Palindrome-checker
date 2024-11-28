
const button=document.getElementById("check-btn");
button.addEventListener("click",checkPalindrome);
function checkPalindrome(){
  const input=document.getElementById("text-input");
  const div=document.getElementById("result");
  const text=input.value.trim();
 
  if (!text){
  alert("Please input a value");
  return;}

 
  if(isPalindrome(text)){
    div.innerText=`${text} is a palindrome`;
  }else {
    div.innerText=`${text} is not a palindrome`;
  }
}

function isPalindrome(input){
  const cleanedText=input.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  const reversedText=cleanedText.split("").reverse().join("");
  return cleanedText===reversedText;
}
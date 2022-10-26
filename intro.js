function intro(){
const name = prompt("What's your name?","");
if (name) {
let answer =`Glad to see you, ${name}`;
alert(answer);
return answer;
} else {
 answer = "What a pity, you didn't introduce yourself";
alert(answer);
return answer;
}}

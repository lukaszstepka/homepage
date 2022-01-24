const hello = "Cześć wszystkim mam na imię ";
console.log(hello);
const my_name = "Łukasz"; 
const age = 30; 

let hello_my_friend = (my_name,age);

const adding = document.querySelector('.article__day--jsContent');

adding.innerHTML = `${hello} ${my_name}  i mam  ${age} lat.`;

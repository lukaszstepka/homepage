const hello = "Cześć wszystkim mam na imię ";
//console.log(hello);
const my_name = "Łukasz";
const age = 30;

//let hello_my_friend = (my_name,age);

//const adding = document.querySelector('.article__day--jsContent');

//adding.innerHTML = `${hello} ${my_name}  i mam  ${age} lat.`;

function sey_hello(my_name, age) {
  const adding = document.querySelector(".article__day--jsContent");
  hello_ready = adding.innerHTML = `${hello} ${my_name}  i mam  ${age} lat.`;
  return hello_ready;
}

const hello_result = sey_hello(my_name, age);

const sey_helloArrowFunction = (my_name, age) => {
  const adding = document.querySelector(".article__day--jsContent--Arrow");
  hello_ready =
    adding.innerHTML = `${hello} ${my_name}  i mam  ${age} lat. To funkcja Arrow`;
};
sey_helloArrowFunction(my_name, age);

const obiectHello = {
  myAge: 30,
  myName: "Łukasz",
  myInfo: `Cześć, mam na imię `,
};

console.log(obiectHello.myInfo);

const contentObject = document.querySelector(
  ".article__day--jsContent--Object"
);

contentObject.innerHTML = `${obiectHello.myInfo}${obiectHello.myName} i mam ${obiectHello.myAge} lat. (załadowane z obiektu)`;

console.log(obiectHello.myInfo);
console.log(obiectHello.myName);
console.log(" i mam ");
console.log(obiectHello.myAge);
console.log(" lat");

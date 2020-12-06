
const name = "Łukasz";
const age = "29";

console.log(`Cześć jestem ${name} i mam ${age} lat`);
const header = document.querySelector('.js__injection');
//header.innerHTML = '<span style="color:red; font-size:500%;"><b>Poznaj moc JS-a !!!</b></span>';
console.log(header);

function greet(name, age) {
    const header__js =document.querySelector(`.header__js`);
   // header__js.innerHTML = `Dzień dobry ${name}! masz ${age} lat, witaj na mojej stronie;)`;
}
greet(name, age);

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    itOpereting: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
}
const obj = document.querySelector('.obj');
//obj.innerHTML = `Dzień najlepszy bo obiektowy= ${deathStar.name}`;

console.log(typeof "2");
if (2 == "2") {
    console.log('Javascript to nie Java');
}
const humanOne = {
    age: 22,
    name: 'Stefan',
}
const humanTwo=29;
if(humanOne.age < humanTwo){
    console.log('Jestem starszy mam 29');
}

const button = document.querySelector('.button--in--html');
 console.log(button);
const click = () =>{
    const change = document.querySelector(".navigation--item");
    change.classList.toggle('klasa--z--js');
}
button.addEventListener('click', click);
  

    
    //hamburger.innerHTML = 'Udało się';
   // hamburger.classList.toggle('.klasa--z--js');
//})
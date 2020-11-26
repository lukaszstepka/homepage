
const name = "Łukasz";
const age = "29";

console.log(`Cześć jestem ${name} i mam ${age} lat`);
const header = document.querySelector('.js__injection');
header.innerHTML = '<span style="color:red; font-size:500%;"><b>Poznaj moc JS-a !!!</b></span>';
console.log(header);

function greet(name, age) {
    const header__js =document.querySelector(`.header__js`);
    header__js.innerHTML = `Dzień dobry ${name}! masz ${age} lat, witaj na mojej stronie;)`;
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
obj.innerHTML = `Dzień najlepszy bo obiektowy= ${deathStar.name}`;

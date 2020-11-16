
const name = "Łukasz";
const age = "29";

console.log(`Cześć jestem ${name} i mam ${age} lat`);
const header = document.querySelector('.js__injection');
header.innerHTML = '<span style="color:red; font-size:500%;"><b>Poznaj moc JS-a !!!</b></span>';
console.log(header);
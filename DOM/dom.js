const changeHeading = () => {
    const h1 = document.getElementById("title");
    h1.innerText = "Hello";


    console.log(h1);
};

// innerText: Gets or sets the rendered (visible) text.
// textContent: Gets or sets all text content inside an element, regardless of visibility.

const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);

// create element
const div = document.createElement('div');
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute('title', 'Generated Title');
div.style.backgroundColor = "green";
div.style.padding = "1rem";
div.style.margin = "2rem 0";
div.innerText = "JavaScript DOM";
document.body.appendChild(div);
console.log(div);


const addLanguage = (langName) => {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}
addLanguage("Golang");
addLanguage("Typescript");

// edit and remove elements
const secondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement('li');
newLi.textContent = "Rust";
secondLang.replaceWith(newLi);



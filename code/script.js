// A function that adds and remove the class "active" on the section you click on.


function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}


const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");
const accordionElement = document.querySelector(".accordion");

section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);


// hämta innehåll från en webbsida
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

// Visar innehållet på console i inspektorn 
  console.log(data);

  
  data.forEach((posts) => {
// skapa först en variabel där man skapar en div
  const postsEl = document.createElement("div");
// ta sedan variabeln och sätt attribut som class / section os.v..
  postsEl.setAttribute("class", "section");
  postsEl.innerHTML = `<h2>${posts.title}</h2>`;

  postsEl.addEventListener("click", toggle);
  accordionElement.appendChild(postsEl);

  const bodyEl = document.createElement("div");
  bodyEl.setAttribute("class", "description");
  bodyEl.innerHTML = `<p>${posts.title}</p>`;
  postsEl.appendChild(bodyEl);

  })

}
getPosts();


// where to add 
const placesList=document.getElementById('places-list');
// what to do added
const li=document.createElement('li');
li.innerText='Sajek';

// add the  child
placesList.appendChild(li)




// create a new section

const mainContainer=document.getElementById('main-container');

const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='Biriyani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='Kacchi';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='Teheri';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// set inner html directly

const sectionDresss=document.createElement('section');
sectionDresss.innerHTML=`
<h1>My Dress Section</h1>
<ul>
   <li>Lungi</li>
   <li>Pant</li>
   <li>Shirt</li>

</ul>


`
mainContainer.appendChild(sectionDresss);

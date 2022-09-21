const today = new Date(); 

let thisYear = today.getFullYear();

// console.log(thisYear);

let footer = document.querySelector('footer'); 

let copyright = document.createElement('p');

copyright.innerHTML = `Tracy Cano © ${thisYear}`;  

footer.appendChild(copyright);

//console.log(footer);

let skills = ["JavaScript", "Java", "HTML5"];

let skillsSection = document.querySelector('#skills');

let skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
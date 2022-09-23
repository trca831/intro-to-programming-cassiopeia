const today = new Date(); 

let thisYear = today.getFullYear();

// console.log(thisYear);

let footer = document.querySelector('footer'); 

let copyright = document.createElement('p');
copyright.innerHTML = `© Tracy Cano ${thisYear}`;  
footer.appendChild(copyright);

let skills = ["JavaScript", "Java", "HTML5"];

let skillsSection = document.querySelector('#skills');

let skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener("submit", (e) => { 
     let name = e.target.name.value;
     let email = e.target.email.value;
    let message = e.target.message.value;
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("message: " + message);
e.preventDefault();
let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span>  `;
let removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode();
    entry.remove();
    
})

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
messageForm.reset;
});


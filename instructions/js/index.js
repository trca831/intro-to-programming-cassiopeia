const today = new Date(); 
const projectSection = document.querySelector('#project-section');

let thisYear = today.getFullYear();
let footer = document.querySelector('footer'); 
let copyright = document.createElement('p');
copyright.classList.add("copyright");
copyright.innerHTML = `© Tracy Cano ${thisYear}`;  
footer.appendChild(copyright);

fetch('http://api.github.com/users/trca831/repos')
  .then((response) => response.json())
  .then(afterReponse)
  .catch(handleErrors);

   function afterReponse(response) {
    for (let i = 0; i < response.length; i++){
      let project = document.createElement("li");
      project.innerHTML = `<a href="${response[i].html_url}" target="_blank">${response[i].name}</a>`;
      let details = document.createElement("ul");
      let description = document.createElement("li");
     description.innerHTML = response[i].description;
      details.appendChild(description);
     let date = document.createElement("li");
      date.innerHTML = response[i].created_at;
      details.appendChild(date);
      project.appendChild(details);
      projectSection.appendChild(project);
    }
 }

function handleErrors (error){
  console.log("unable to load github api", error);
  let item = document.createElement("li");
  item.innerHTML = "unable to load repositories. Please try again later.";
  projectSection.appendChild(item);
}

let skills = ["JavaScript", "Java", "HTML5", "CSS", "VS Code", "AJAX", "API", "Git", "GitHub"];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');
let messageCount = 0;
messageForm.addEventListener("submit", (e) => { 
     let name = e.target.name.value;
     let email = e.target.email.value;
     let message = e.target.message.value;
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("message: " + message);
e.preventDefault();
let messageSection = document.querySelector("#messages");
let messageHeader = document.querySelector("#messages_header");
messageHeader.innerHTML = "Messages";
messageHeader.style.visibility="visible";
messageSection.style.visibility="hidden";

let messageList = messageSection.querySelector("ul");
let newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span>  `;
let removeButton = document.createElement("button");
removeButton.classList.add("remove-button");
removeButton.innerText = "Remove";
removeButton.type = "button";
let editButton = document.createElement("button");
editButton.classList.add("edit-button");
editButton.innerText = "Edit";
editButton.type = "button";
removeButton.addEventListener("click", (e) => {
  messageCount --;
    let entry = removeButton.parentNode;
    entry.remove();
    if(messageCount == 0) {
      messageHeader.style.visibility="hidden";
      messageSection.style.visibility="hidden";
    }
});

newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);
messageList.appendChild(newMessage);
messageForm.reset();
messageSection.style.visibility="visible";
messageCount++;
editButton.addEventListener("click", (e) => {
  e.preventDefault();
  newMessage.remove();
  messageCount--;
  if(messageCount == 0) {
    messageHeader.style.visibility="hidden";
    messageSection.style.visibility="hidden";
  }
 
  messageForm.name.value = name;
  messageForm.email.value = email;
  messageForm.message.value = message;
  console.log(name);
});
});
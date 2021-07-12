const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add("hidden");
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText =  `반갑습니다 ${username}님`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본 동작 방지 ex)새로고침, 멈춤 등등 
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paingGreeting(username);
    if (self.name != 'reload') {
        self.name = 'reload';
        self.location.reload(true);
    }
    else self.name = ''; 
}

function paingGreeting(username){
    greeting.innerText=`Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paingGreeting(savedUsername);
}

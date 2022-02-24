const clock = document.querySelector("h2#clock");
if(localStorage.getItem(USERNAME_KEY) !== null){
    clock.classList.remove(HIDDEN_CLASSNAME);
    
    function getClock(){
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}`;
    }
    getClock();
    setInterval(getClock, 1000); 

}else{
    clock.classList.add(HIDDEN_CLASSNAME);
}
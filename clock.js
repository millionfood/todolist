const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours =  date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 12 ? hours : `${hours-12}`}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
    
}
function show() {
  console.log("hi");
}

function init(){
    getTime();
    
    setInterval(getTime, 1000);
    
    
   
}
init();
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS) //- class가 있는지 확인 후 있으면 add 없으면 remove
    
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }  else {
    //     title.classList.add(CLICKED_CLASS);
    // } - this is same of toggle 즉 이걸 다 함축한게 위의 toggle
}

function init() {
    title.addEventListener("click", handleClick);
}
init();

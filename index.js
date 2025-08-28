// function to get element
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}



//  get all card heart icon
const cardHeartIcons = document.getElementsByClassName('card-heart-icon')
console.log(cardHeartIcons);
// handle heart icon
for(let cardHeartIcon of cardHeartIcons) {
    cardHeartIcon.addEventListener("click", function(){
        console.log("button clicked");

        const heartIconClickCount = getElement("heart-icon-count").innerText
        console.log(heartIconClickCount);

        const currentHeartIconClickCount = Number(heartIconClickCount) + 1;
        getElement("heart-icon-count").innerText = currentHeartIconClickCount
    }) 
}





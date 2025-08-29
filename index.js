// function to get element
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

//  heart count functionality
const cardHeartIcons = document.getElementsByClassName('card-heart-icon')
// console.log(cardHeartIcons);

for(let cardHeartIcon of cardHeartIcons) {
    cardHeartIcon.addEventListener("click", function(){
        // console.log("button clicked");

        const heartIconClickCount = getElement("heart-icon-count").innerText
        // console.log(heartIconClickCount);

        const currentHeartIconClickCount = Number(heartIconClickCount) + 1;
        getElement("heart-icon-count").innerText = currentHeartIconClickCount
    }) 
}

// call button functionality
let coins = 100;
const coinDisplay = getElement("coin-count-display")
const callHistoryList = document.getElementById("call-history-logs")
const clearHistoryButton = document.getElementById("clear-history-btn")
const callButtons = document.getElementsByClassName("call-btn")
// console.log(callButtons)

for(let i = 0; i < callButtons.length; i++){
    callButtons[i].addEventListener("click", function(){
        const serviceName = callButtons[i].parentNode.parentNode.childNodes[3].childNodes[1].textContent;
        // console.log(serviceName);
        const serviceNumber = callButtons[i].parentNode.parentNode.childNodes[3].childNodes[5].textContent;
        // console.log(serviceNumber);

        if(coins < 20) {
            alert("Not enough coins. you need at least 20 coins to make a Call");
            return;
        }

        alert(" 📞 Calling " + serviceName + " at " + serviceNumber);
        coins -= 20;
        coinDisplay.textContent = coins;

        // call history functionality
        const timeNow = new Date().toLocaleTimeString();

        const historyItem = document.createElement("div");
        historyItem.className = "call-history-item";
        historyItem.innerHTML = `
        <div id="call-historys" class="call-history-item bg-[#F2F2F2] flex justify-between items-center p-4 m-6 rounded-lg mb-2">
                    <div>
                        <p class="text-lg font-semibold">${serviceName}</p>
                        <p class="text-gray-500 text-lg">${serviceNumber}</p>
                    </div>
                    <div class="text-lg">${timeNow}</div>
                 </div>
        `;
        callHistoryList.appendChild(historyItem);

    })
}

// clear history functionality
clearHistoryButton.addEventListener("click", function(){
    callHistoryList.innerHTML = "";
})

// copy button functionality
let copyCount = 2;

const copyButtons = document.getElementsByClassName("copy-btn")
// console.log(copyButtons);

for(let copyButton of copyButtons) {
    copyButton.addEventListener("click", function() {
        // console.log(" Copy button clicked");

        const copyIconClickCount = getElement("copy-icon-count").innerText
        // console.log(copyIconClickCount);

        const currentCopyIconClickCount = Number(copyIconClickCount) + 1;
        getElement("copy-icon-count").innerText = currentCopyIconClickCount

        const numberToCopy = copyButton.parentNode.parentNode.childNodes[3].childNodes[5].textContent;
        // console.log(numberToCopy);

        navigator.clipboard.writeText(numberToCopy).then(() => {
            alert(" Copied Number " + numberToCopy)
        })

    })
}






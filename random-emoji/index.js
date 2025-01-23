// emoji-Api.com 
const btnEl = document.getElementById("btn");
const emojiEl = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=fdf391e169c2296daa4b5f4159ed49ed938f90bd");

    data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName : data[i].character,
            emojiCode : data[i].unicodeName
        });
    }
}
getEmoji();

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiEl.innerText = emoji[randomNum].emojiCode;
});
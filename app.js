const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");
const audioElements = {}; 

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url('img/${kit}.jpg')`;

    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    
    audioElements[kit] = audioEl;

    containerEl.appendChild(btnEl);
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click", () => {
        audioEl.currentTime = 0;
        audioEl.play();
    });
});

window.addEventListener("keydown", (event) => {
    const kit = kits.find(k => k[0] === event.key); 
    if (kit) {
        const btnEl = document.querySelector(`.btn:nth-child(${kits.indexOf(kit) * 2 + 1})`); 
        const audioEl = audioElements[kit];

        if (audioEl) {
            audioEl.currentTime = 0; 
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    }
});

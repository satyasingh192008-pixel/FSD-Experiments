console.log("JavaScript linked successfully!");

const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("myAudio");

playBtn.addEventListener("click", () => {
    audio.play()
        .then(() => {
            console.log("Audio is playing");
        })
        .catch((error) => {
            console.error("Error playing audio:", error);
        });
});

document.querySelector("h1").addEventListener("click", () => {
    alert("You clicked on the heading!");
});
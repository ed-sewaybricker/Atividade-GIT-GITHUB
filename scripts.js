const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const agent = button.dataset.agent;

        let audio;

        if (agent === "jett") {
            audio = new Audio("audio/jett.mp3");
        }

        else if (agent === "phoenix") {
            audio = new Audio("audio/phoenix.mp3");
        }

        else if (agent === "sage") {
            audio = new Audio("audio/sage.mp3");
        }

        else if (agent === "neon") {
            audio = new Audio("audio/neon.mp3");
        }

        else if (agent === "sova") {
            audio = new Audio("audio/sova.mp3");
        }

        else if (agent === "clove") {
            audio = new Audio("audio/clove.mp3");
        }

        if (audio) {
            audio.play();
        }
    });
});
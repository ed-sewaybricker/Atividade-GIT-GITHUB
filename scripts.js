const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const agent = button.dataset.agent;

        const agentesValorant = [
            "astra",
            "breach",
            "brimstone",
            "chamber",
            "clove",
            "cypher",
            "deadlock",
            "fade",
            "gekko",
            "harbor",
            "iso",
            "jett",
            "kayo",
            "killjoy",
            "miks",
            "neon",
            "omen",
            "phoenix",
            "raze",
            "reyna",
            "sage",
            "skye",
            "sova",
            "tejo",
            "veto",
            "viper",
            "vyse",
            "waylay",
            "yoru"
        ];

        let audio;

        if (agentesValorant.includes(agent)) {
            audio = new Audio("audio/"+agent+".mp3")
        }

        if (audio) {
            audio.play();
        }
    });
});
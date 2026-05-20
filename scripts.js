const buttons = document.querySelectorAll("button");

let agentes = [];

async function buscarAgentes() {
    const response = await fetch("https://valorant-api.com/v1/agents?language=pt-BR");

    const data = await response.json();

    agentes = data.data;

    const duelistas = agentes.filter(agente => {
        return agente.role &&
               agente.role.displayName === "Duelista";
    });

    const iniciadores = agentes.filter(agente => {
        return agente.role &&
               agente.role.displayName === "Iniciador";
    });

    const controladores = agentes.filter(agente => {
        return agente.role &&
               agente.role.displayName === "Controlador";
    });

    const sentinelas = agentes.filter(agente => {
        return agente.role &&
               agente.role.displayName === "Sentinela";
    });

    const duelistasContainer = document.getElementById("duelistas");
    const iniciadoresContainer = document.getElementById("iniciadores");
    const controladoresContainer = document.getElementById("controladores");
    const sentinelasContainer = document.getElementById("sentinelas");

    duelistas.forEach(agente => {
        duelistasContainer.innerHTML += `
            <div class="card" onclick="descricaoAgente('${agente.uuid}')">
                <img src="${agente.displayIcon}" alt="${agente.displayName}">
                <h2>${agente.displayName}</h2>
            </div>
        `;
    });

    iniciadores.forEach(agente => {
        iniciadoresContainer.innerHTML += `
            <div class="card" onclick="descricaoAgente('${agente.uuid}')">
                <img src="${agente.displayIcon}" alt="${agente.displayName}">
                <h2>${agente.displayName}</h2>
            </div>
        `;
    });

    controladores.forEach(agente => {
        controladoresContainer.innerHTML += `
            <div class="card" onclick="descricaoAgente('${agente.uuid}')">
                <img src="${agente.displayIcon}" alt="${agente.displayName}">
                <h2>${agente.displayName}</h2>
            </div>
        `;
    });

    sentinelas.forEach(agente => {
        sentinelasContainer.innerHTML += `
            <div class="card" onclick="descricaoAgente('${agente.uuid}')">
                <img src="${agente.displayIcon}" alt="${agente.displayName}">
                <h2>${agente.displayName}</h2>
            </div>
        `;
    });
}

const audios = {
    "Astra": "astra",
    "Breach": "breach",
    "Brimstone": "brimstone",
    "Chamber": "chamber",
    "Clove": "clove",
    "Cypher": "cypher",
    "Deadlock": "deadlock",
    "Fade": "fade",
    "Gekko": "gekko",
    "Harbor": "harbor",
    "Iso": "iso",
    "Jett": "jett",
    "KAY/O": "kayo",
    "Killjoy": "killjoy",
    "Miks": "miks",
    "Neon": "neon",
    "Omen": "omen",
    "Phoenix": "phoenix",
    "Raze": "raze",
    "Reyna": "reyna",
    "Sage": "sage",
    "Skye": "skye",
    "Sova": "sova",
    "Tejo": "tejo",
    "Veto": "veto",
    "Viper": "viper",
    "Vyse": "vyse",
    "Waylay": "waylay",
    "Yoru": "yoru"
};

function descricaoAgente(uuid) {
    const agente = agentes.find(a => a.uuid === uuid);

    const modal = document.getElementById("modal");

    document.getElementById("modal-img").src = agente.fullPortrait;
    document.getElementById("modal-name").innerText = agente.displayName;
    document.getElementById("modal-desc").innerText = agente.description;

    document.getElementById("voice-btn").onclick = () => {
        tocarAudio(agente.displayName);
    };

    const container = document.getElementById("habilidades-container");
    container.innerHTML = "";

    agente.abilities.forEach((hab) => {
        if (!hab.displayIcon) return;

        const btn = document.createElement("button");
        btn.classList.add("habilidade-btn");

        btn.innerHTML = `
            <img src="${hab.displayIcon}" alt="${hab.displayName}">
        `;

        btn.onclick = () => {
            document.getElementById("habilidade-nome").innerText = hab.displayName;
            document.getElementById("habilidade-texto").innerText = hab.description;
        };

        container.appendChild(btn);
    });

    const primeira = agente.abilities.find(a => a.displayIcon);
    if (primeira) {
        document.getElementById("habilidade-nome").innerText = primeira.displayName;
        document.getElementById("habilidade-texto").innerText = primeira.description;
    }

    modal.style.display = "flex";
}

function tocarAudio(nomeAgente) {
    const nomeArquivo = audios[nomeAgente];

    const audio = new Audio(`audio/${nomeArquivo}.mp3`);

    audio.play();
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

buscarAgentes();
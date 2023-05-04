async function load() {
    const res = await getInfo("PARTICIPACIONESHISTORICO"); // GOLEADORESHISTORICO // PARTICIPACIONESHISTORICO
    const div = document.querySelector("#contenedor");
    div.innerHTML = res.data;
}

load()
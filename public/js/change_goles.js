async function load() {
    const res = await getInfo("GOLEADORESHISTORICO"); // GOLEADORESHISTORICO // PARTICIPACIONESHISTORICO
    const div = document.querySelector("#contenedor");
    div.innerHTML = res.data;
}

load()
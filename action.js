const { obtenerTablaPorHoja} = require("./util.js");

function getData(params, query) {
    const string = obtenerTablaPorHoja(params.task);
    return string;
}

module.exports = { getData };
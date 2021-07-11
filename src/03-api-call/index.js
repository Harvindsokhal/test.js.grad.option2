const fetch = require('node-fetch');

module.exports = async function fetchLukeSkywalker() {
    const url = 'https://swapi.dev/api/people/1/';
    const response = await fetch(url);
    const data = await response.json();
    const replaced = JSON.stringify(data).replace(/https/g, "http")
    const converted = JSON.parse(replaced)
    return (converted);
};


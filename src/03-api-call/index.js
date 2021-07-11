const fetch = require('node-fetch');

module.exports = async function fetchLukeSkywalker() {
    const url = 'https://swapi.dev/api/people/1/';
    const response = await fetch(url);
    const data = await response.json();
    const replaced = JSON.stringify(data).replace(/https/g, "http") //API has web links stored as https and was changed to http to match the snapshot.
    const converted = JSON.parse(replaced)
    return (converted);
};


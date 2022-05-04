/**
 * shuffle function taken from: https://bost.ocks.org/mike/shuffle/
 */

function shuffle(array) {
    var m = array.length,
        t,
        i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function selectCards(nrCards, array) {
    let newDatabase = shuffle(JSON.parse(JSON.stringify(array)));
    let selectedString = [];
    let selectedNumber = [];

    for (let i = 0; i < nrCards; i++) {
        selectedString.push(newDatabase[i].id);
        selectedNumber.push(newDatabase[i].id.split("-")[1]);
    }
    return selectedString;
}

export { selectCards, shuffle };

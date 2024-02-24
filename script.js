//M
adjectives = ['___', '___', '___', '___', '___', '___', '___', '___', '___'];
//V
updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="Container">
            <h1>Et Adjektiv Spill</h1>
            <h3>Trykk på adjektiv knappene for å fylle ut di tomme plassene i teksen.
            Trykk 'start på nytt' for å prøve igjen.</h3>
            <div id="Story">
                I en ${adjectives[0]} landsby, omringet av ${adjectives[1]} 
                fjell og ${adjectives[2]} elver, bodde en ${adjectives[3]} 
                bonde. Han hadde en ${adjectives[4]} hest og en ${adjectives[5]} 
                katt. En dag fant de en ${adjectives[6]} skatt i en ${adjectives[7]} 
                skog. Skatten gjorde landsbyen ${adjectives[8]}, og alle levde 
                ${adjectives[9]} etterpå.
            </div>
            <div class="btmContainer">
                <button onclick="changeAdjective(this.innerText)">koselig</button>
                <button onclick="changeAdjective(this.innerText)">skyhøye</button>
                <button onclick="changeAdjective(this.innerText)">krystallklare</button>
                <button onclick="changeAdjective(this.innerText)">gammelmodig</button>
                <button onclick="changeAdjective(this.innerText)">trofast</button>
                <button onclick="changeAdjective(this.innerText)">nysgjerrig</button>
                <button onclick="changeAdjective(this.innerText)">mystisk</button>
                <button onclick="changeAdjective(this.innerText)">tett</button>
                <button onclick="changeAdjective(this.innerText)">velstående</button>
                <button onclick="changeAdjective(this.innerText)">lykkelig</button>
            </div>
            <button class="Reset" onclick="resetGame()">Start på nytt</button>
        </div>
    `;
}
//C

function changeAdjective(word) {
    let placed = false;
    while (!placed) {
        let i = Math.floor(Math.random() * adjectives.length);
        if (adjectives[i] === '___' || adjectives[i] === word) {
            adjectives[i] = word;
            placed = true;
        }
    }
    updateView();
}

function resetGame() {
    adjectives = ['___', '___', '___', '___', '___', '___', '___', '___', '___'];
    updateView()
}

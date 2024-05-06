function interviewJohn() {
    document.getElementById('game-container').innerHTML = '<p>You decide to interview Mr. John Black.</p>';
    setTimeout(function() {
        document.getElementById('game-container').innerHTML += '<p>John claims he was out of town on business when the murder occurred.</p>';
        document.getElementById('game-container').innerHTML += '<p>But you notice inconsistencies in his alibi...</p>';
        document.getElementById('game-container').innerHTML += '<button id="accuse-john">Accuse John</button>';
        document.getElementById('game-container').innerHTML += '<button id="interrogate-john">Interrogate John further</button>';
        // Add event listeners for accuse and interrogate buttons
        document.getElementById('accuse-john').addEventListener('click', accuseJohn);
        document.getElementById('interrogate-john').addEventListener('click', interrogateJohn);
    }, 3000);
}

function interviewMargaret() {
    document.getElementById('game-container').innerHTML = '<p>You decide to interview Mrs. Margaret White.</p>';
    setTimeout(function() {
        document.getElementById('game-container').innerHTML += '<p>Margaret claims she was at a charity event at the time of the murder.</p>';
        document.getElementById('game-container').innerHTML += '<p>But something about her demeanor makes you suspicious...</p>';
        document.getElementById('game-container').innerHTML += '<button id="accuse-margaret">Accuse Margaret</button>';
        document.getElementById('game-container').innerHTML += '<button id="interrogate-margaret">Interrogate Margaret further</button>';
        // Add event listeners for accuse and interrogate buttons
        document.getElementById('accuse-margaret').addEventListener('click', accuseMargaret);
        document.getElementById('interrogate-margaret').addEventListener('click', interrogateMargaret);
    }, 3000);
}

// Functions for accusing and interrogating suspects
function accuseElizabeth() {
    document.getElementById('game-container').innerHTML = '<p>You accuse Elizabeth of lying, but she maintains her innocence.</p>';
    document.getElementById('game-container').innerHTML += '<p>Perhaps there is more to her story...</p>';
    document.getElementById('game-container').innerHTML += '<button id="continue-investigation">Continue Investigation</button>';
    document.getElementById('continue-investigation').addEventListener('click', continueInvestigation);
}

function interrogateElizabeth() {
    document.getElementById('game-container').innerHTML = '<p>You press Elizabeth for more details, but she becomes defensive.</p>';
    document.getElementById('game-container').innerHTML += '<p>It seems like she's hiding something...</p>';
    document.getElementById('game-container').innerHTML += '<button id="continue-investigation">Continue Investigation</button>';
    document.getElementById('continue-investigation').addEventListener('click', continueInvestigation);
}

function accuseJohn() {
    document.getElementById('game-container').innerHTML = '<p>You accuse John of lying, and he breaks down, confessing to the murder.</p>';
    document.getElementById('game-container').innerHTML += '<p>Case closed.</p>';
}

function interrogateJohn() {
    document.getElementById('game-container').innerHTML = '<p>You press John for more details, but he sticks to his story.</p>';
    document.getElementById('game-container').innerHTML += '<p>He seems nervous, but is he really the killer?</p>';
    document.getElementById('game-container').innerHTML += '<button id="continue-investigation">Continue Investigation</button>';
    document.getElementById('continue-investigation').addEventListener('click', continueInvestigation);
}

function accuseMargaret() {
    document.getElementById('game-container').innerHTML = '<p>You accuse Margaret of lying, but she bursts into tears, insisting on her innocence.</p>';
    document.getElementById('game-container').innerHTML += '<p>Could she be telling the truth?</p>';
    document.getElementById('game-container').innerHTML += '<button id="continue-investigation">Continue Investigation</button>';
    document.getElementById('continue-investigation').addEventListener('click', continueInvestigation);
}

function interrogateMargaret() {
    document.getElementById('game-container').innerHTML = '<p>You press Margaret for more details, but she becomes evasive.</p>';
    document.getElementById('game-container').innerHTML += '<p>It's clear she's hiding something...</p>';
    document.getElementById('game-container').innerHTML += '<button id="continue-investigation">Continue Investigation</button>';
    document.getElementById('continue-investigation').addEventListener('click', continueInvestigation);
}

function continueInvestigation() {
    document.getElementById('game-container').innerHTML = '<p>You decide to gather more evidence and interview other witnesses.</p>';
    // Add more content and choices as the investigation progresses
}

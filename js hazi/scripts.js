function randomSzam(max) {
    return Math.floor(Math.random() * max);
}

function szerk() {
    aBefogo = document.getElementById("aBefogo").value;
    bBefogo = document.getElementById("bBefogo").value;
    atfogo = document.getElementById("atfogo").value;

    if  (Math.pow(aBefogo, 2) + Math.pow(bBefogo, 2) == Math.pow(atfogo, 2)) {
        alert("A háromszög megszerkeszthető!")
    }
    else {
        alert("A háromszög NEM megszerkeszthető!")
    }
}
function veletlen() {
    document.getElementById("aBefogo").value = randomSzam(100);
    document.getElementById("bBefogo").value = randomSzam(100);
    document.getElementById("atfogo").value = randomSzam(100);
}
function atfogoSzam() {
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(document.getElementById("aBefogo").value, 2) + Math.pow(document.getElementById("bBefogo").value, 2))
}
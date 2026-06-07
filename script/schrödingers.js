let cat = {
    alive:true,
    name:"Gustav"
}

let catBtn = document.getElementById("cat")

//catBtn.onclick = alert(cat.name)

let catAlive = Math.random() < 0.5 ? true:false;

function catLife() {
    if (cat.alive = catAlive) {
        alert("cat is alive")
    } else {
        alert("cat is in a different space-time continuum")
    }
}

catBtn.onclick = catLife
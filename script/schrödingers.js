let cat = {
    alive:true,
    name:"Gustav"
}

let catBtn = document.getElementById("cat")

//catBtn.onclick = alert(cat.name)

function catLife() {
    let catAlive = Math.random() < 0.5 ? true:false;
    
    if (cat.alive = catAlive) {
        alert("The cats name is " + cat.name + "and it's alive.")
    } else {
        alert("The cats name is " + cat.name + " and it's in a different space-time continuum!")
    }
}

catBtn.onclick = catLife
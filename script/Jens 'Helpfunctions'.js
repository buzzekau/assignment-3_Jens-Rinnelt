let filter = document.getElementById("filter")

filter.onclick = charRemove

const text = document.getElementById("text").value
const character = document.getElementById("character").value

function charRemove (text, character) {
    if (text && character == typeof 'string') {
        let result = text.replace(/character/g,"")
        document.getElementById("output").innerHTML = result
    } else {
        throw "wrong datatype"      
    }
}







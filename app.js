import alphabet from "./leet.json" assert {type: "json"}
window.onload = () => {
    const translate = document.querySelector("#translateText")
    translate.addEventListener("input", traducir)
}

function traducir(e) {
    let msg = e.target.value
    let translation = ""
    for(let i=0; i<msg.length; i++) {
        let char = msg.charAt(i).toLowerCase()
        if(char != " ") {
            let letter = alphabet.find((el) => el.id === char)
            let random = Math.floor(Math.random() * letter.translation.length)
            let replace = letter.translation[random]
            translation += replace
        } else {
            translation += " "
        }
    }
    document.querySelector("#translationText").value = translation
}
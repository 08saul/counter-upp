let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let welcomEla=document.getElementById("welcom-ela")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
welcomEla.textContent="you are welcome to travel with us,have a safe journey! "

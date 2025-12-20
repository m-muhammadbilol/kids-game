import { elBox, elCorrect, elMathProblem, elwrong } from "./elements.js"

function random(point = 1){
    return Math.trunc(Math.random() * point)
}

function changeActios() {
    let mathsign = ["+" , "/" , "-", "*"]
let randomIndex = random(mathsign.length)

let a = random(10)
let b = random(10)
const sign = mathsign[randomIndex]

if(sign === "/"){
    while(a < b || a % b !== 0){
        a = random(10)
        b = random(10)
    }
}

const result = eval(`${a} ${mathsign[randomIndex]} ${b}`)
const display = `${a} ${mathsign[randomIndex]} ${b}` 
return {display , result}
}

function results(result) {
    const array = []

    while(true) {
        if(array.length === 16){
            break
        }else{
            array.push(random(100))
        }
    }

    const randomIndex = random(array.length)
    array[randomIndex] = result
    return array
}

function ui(results , display) {
    elMathProblem.innerText = display
    elBox.innerHTML = null
    results.forEach((element) => {
        const span = document.createElement("span")
        span.classList.add("span");
        span.innerText = element;  
        elBox.appendChild(span);
    });
}

const {display , result} = changeActios()
ui(results(result) , display)





elBox.addEventListener("click" , (evt) => {
    if(evt.target.classList.contains("span")){
        if(evt.target.innerText == result ){
            evt.target.innerText = "✅"
            elCorrect.play()
            setTimeout(()=>{
                const {display , result} = changeActios()
                ui(results(result) , display)
            } , 500)
        }else{
            evt.target.innerText = "❌"
            elwrong.play()
            setTimeout(()=>{
                 evt.target.innerText = random(100)
            } , 500)
        }
    }

})
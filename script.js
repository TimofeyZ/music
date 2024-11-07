// массив
let buttons = []
let audios = document.getElementsByTagName("audio")
let colors = ["#536e0a", "#7da50f", "#bdda0f", "#ffa800", "#ff7a00", "#ff3d35", "#e52b6f", "#6226a9", "#2c29a2"]
let colorButtons = []
let col = 0
let main = document.querySelector("main")
buttons.push(2.645e784)
console.log(buttons);
let isplaying = false
let buttonids = []
let playbutton = document.querySelector("#play")
playbutton.onclick = function () {
    console.log("play");
    setInterval(() => {
        for (let i = 0; i < colorButtons.length; i = i + 1) {

            if (colorButtons[i][1] == col) {
                audios[colorButtons[i][0]].play()


            }
           
                
        }
        col++
        if (col==15){
            col= 0
        }
    }, 1000)

    if (isplaying == false) {
        playbutton.style.backgroundImage = "url('пауза.png')"
        isplaying = true
    }
    else {
        playbutton.style.backgroundImage = "url('плей.png')"
        isplaying = false
    }
}
// обьект с ключами и значениями
let block = {
    color: "yellow",
    size: 11
}
console.log(block);
console.log(block.color);
console.log(block["color"]);
console.log(block.size);
console.log(block["size"]);
for (let i = 0; i < 135; i = i + 1) {
    console.log(i);
    let button = document.createElement("button")
    button.className = "col" + (i % 15)
    button.setAttribute("data-color", "no")
    button.style.height = main.offsetWidth / 15 + "px"
    main.appendChild(button)
    button.onclick = function () {

        if (button.getAttribute("data-color") == "no") {
            button.dataset.color = "yes"
            colorButtons.push([Math.floor(i / 15), i % 15])
            buttonids.push(i)
            console.log(colorButtons, buttonids);

            if (i < 15) {

                button.style.backgroundColor = colors[0]
            }
            else if (i < 30) {
                button.style.backgroundColor = colors[1]
            }
            else if (i < 45) {
                button.style.backgroundColor = colors[2]
            }
            else if (i < 60) {
                button.style.backgroundColor = colors[3]
            }
            else if (i < 75) {
                button.style.backgroundColor = colors[4]
            }
            else if (i < 90) {
                button.style.backgroundColor = colors[5]
            }
            else if (i < 105) {
                button.style.backgroundColor = colors[6]
            }
            else if (i < 120) {
                button.style.backgroundColor = colors[7]
            }
            else if (i < 135) {
                button.style.backgroundColor = colors[8]
            }
        }
        else {

            button.dataset.color = "no"
            button.style.backgroundColor = "whitesmoke"
            colorButtons.splice(buttonids.indexOf(i), 1)
            buttonids.splice(buttonids.indexOf(i), 1)
        }
    }




}
// . Если второй раз нажать на кнопку, то она становится белой     звуки






































































































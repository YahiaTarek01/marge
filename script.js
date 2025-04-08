let power = document.querySelector(".gifts")
let bronzes = [
    "خصم %2", 
"خصم %3", 
"خصم %5", 
"كوبون 150ج", 
"كوبون 250ج", 
"كوبون 350ج"
]

let silvers = [
"كاش باك %2", 
"كاش باك %5", 
"خصم %5", 
"خصم %7", 
"خصم %10",
"خصم %12", 
"كوبون 400ج", 
"كوبون 500ج"
]

let golds = [
    "كاش باك %7", 
"خصم %15", 
"خصم %20", 
"كوبون 550ج", 
"كوبون; 700ج", 
"كاش باك %10", 
"SDA مبروك دخلت سحب على منتج", 
]

function Bronze_Show() {
    power.innerHTML = `<div class="gift" style="background: transparent; box-shadow:none;">
                        <img src="${document.querySelector(".g1 img").src}" alt="" style="width:90%"; class="wheeler">
                        <h4>Bronze Wheel</h4>
                        <button class="openb" onclick="TernOn(bronzes,'bronze')">Spin</button>
                       </div>`
}
function Silver_Show() {
    power.innerHTML = `<div class="gift" style="background: transparent; box-shadow:none;">
                        <img src="${document.querySelector(".g2 img").src}" alt="" style="width:90%;"class="wheeler">
                        <h4>Silver Wheel</h4>
                        <button class="openss" onclick="TernOn(silvers,'silver')"">Spin</button>
                       </div>`
}
function Golden_Show() {
    power.innerHTML = `<div class="gift" style="background: transparent; box-shadow:none;">
                        <img src="${document.querySelector(".g3 img").src}" alt="" style="width:90%;"class="wheeler">
                        <h4>Golden Wheel</h4>
                        <button class="opengg" onclick="TernOn(golds,'gold')">Spin</button>
                       </div>`
}
function TernOn(Type,Key,noney) {
    let number = Math.ceil(Math.random() * 1000)
    if(document.querySelector(`.` + Key).textContent > 0) {
        document.querySelector(`.` + Key).textContent--
        document.querySelector(".wheeler").style.transform = "rotate(" + number + "deg)"
        number += Math.ceil(Math.random() * 3000)
        setTimeout(() => {
            let randomitem = Type[Math.floor(Math.random() * Type.length)]
            document.querySelector(".giftt h2").textContent = randomitem
            document.querySelector(".giftt").style.display = "flex"
            let i = 0
            setInterval(() => {
                i += 15
                document.querySelector(".giftt").style.opacity = i
            },100)
        },3000)
    }
    else {
        setTimeout(() => {
        document.querySelector(".giftt h2").textContent = "عذراً لقد انتهت كل محولاتك"
        document.querySelector(".giftt").style.display = "flex"
        let i = 0
        setInterval(() => {
            i += 15
            document.querySelector(".giftt").style.opacity = i
        },100)
    },100)
    } 
}
function Close() {
    document.querySelector(".giftt").style.opacity = 0
    document.querySelector(".giftt").style.display = "none"
}
setInterval(() => {
    if(document.querySelector(".bronze").textContent > 0){document.querySelector(".g1 img").src = "Picsart_25-04-06_17-47-22-659.png"}
    else {document.querySelector(".g1 img").src =  "Picsart_25-04-06_17-51-15-753.png"}
    if(document.querySelector(".silver").textContent > 0){document.querySelector(".g2 img").src = "Picsart_25-04-06_17-45-24-088.png"}
    else {document.querySelector(".g2 img").src = "Picsart_25-04-06_17-50-19-804.png"}
    if(document.querySelector(".gold").textContent > 0){document.querySelector(".g3 img").src = "Picsart_25-04-06_17-48-35-091.png"}
    else {document.querySelector(".g3 img").src = "Picsart_25-04-06_17-51-50-140.png"}
},100)

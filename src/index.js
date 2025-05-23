const titleOfBank = document.querySelector("#titleOfBank")
const typeOfPay = document.querySelector("#typeOfPay")
const cardNumber = document.querySelector("#cardNumber")
const ownerName = document.querySelector("#ownerName")
const endDataOfCard = document.querySelector("#endDataOfCard")
const Card = document.querySelector("#Card")



const updateCardPreview = () => {
    let spans = Card.children
    spans[0].innerHTML = titleOfBank.value
    spans[1].innerHTML = cardNumber.value
    let spansInDiv = spans[2].children
    spansInDiv[0].innerHTML = ownerName.value
    spansInDiv[1].innerHTML = endDataOfCard.value
    spansInDiv[2].innerHTML = typeOfPay.value
}

const createCell = (text) => {
    const td = document.createElement("td")
    td.className = "border px-4 py-2 text-center"
    td.innerText = text
    return td
}

const savedCardInfoInTable = () => {
    const table = document.querySelector("table")
    const tr = document.createElement("tr")
    tr.append(
        createCell(titleOfBank.value),
        createCell(typeOfPay.value),
        createCell(cardNumber.value),
        createCell(ownerName.value),
        createCell(endDataOfCard.value)
    )
    table.append(tr)
}

titleOfBank.addEventListener('input', updateCardPreview)
typeOfPay.addEventListener('change', updateCardPreview)
cardNumber.addEventListener('input', updateCardPreview)
ownerName.addEventListener('input', updateCardPreview)
endDataOfCard.addEventListener('change', updateCardPreview)
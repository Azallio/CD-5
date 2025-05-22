const titleOfBank = document.querySelector("#titleOfBank")
const typeOfPay = document.querySelector("#typeOfPay")
const cardNumber = document.querySelector("#cardNumber")
const ownerName = document.querySelector("#ownerName")
const endDataOfCard_1 = document.querySelector("#endDataOfCard_1")
const endDataOfCard_2 = document.querySelector("#endDataOfCard_2")
const Card = document.querySelector("#Card")



const updateCardPreview = () => {
    let spans = Card.children
    spans[0].innerHTML = titleOfBank.value
    spans[1].innerHTML = cardNumber.value
    let spansInDiv = spans[2].children
    spansInDiv[0].innerHTML = ownerName.value
    spansInDiv[1].innerHTML = `${endDataOfCard_1.value}/${endDataOfCard_2.value}`
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
        createCell(`${endDataOfCard_1.value}/${endDataOfCard_2.value}`)
    )
    table.append(tr)
}

titleOfBank.addEventListener('input', updateCardPreview)
typeOfPay.addEventListener('input', updateCardPreview)
cardNumber.addEventListener('input', updateCardPreview)
ownerName.addEventListener('input', updateCardPreview)
endDataOfCard_1.addEventListener('input', updateCardPreview)
endDataOfCard_2.addEventListener('input', updateCardPreview)
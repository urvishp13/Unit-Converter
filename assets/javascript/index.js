// grab convert-btn from DOM and save it
// grab input field from DOM and save it
const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("amount-input")

// add a click event to btn
    // run convert while passing in number from the input field
convertBtn.addEventListener("click", convert(input.value))

// convert(amount):
function convert(amount) {
    // take the amount and use it to do an Imperial conversion
    imperial(amount)
    // take the amount and use it to do a Metric conversion
    metric(amount)
}

// imperial:
    //
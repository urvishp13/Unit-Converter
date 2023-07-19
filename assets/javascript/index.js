// grab convert-btn from DOM and save it
// grab input field from DOM and save it
const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("amount-input")

// add a click event to btn
    // run convert while passing in number from the input field
convertBtn.addEventListener("click", convert(input.value))

// convert(amount):
function convert(amount) {
    // take the amount and use it to do an Metric conversion
    metric(amount)
    // take the amount and use it to do a Imperial conversion
    // imperial(amount)
}

// metric:
function metric(amount) {
    const feet = document.querySelector(".length .metric")
    const gallons = document.querySelector(".volume .metric")
    const pounds = document.querySelector(".mass .metric")

    // conversions
    const mTOft = 3.281
    const lTOgal = 0.264
    const kgTOlb = 2.204

    // take amount and convert and write to DOM in:
        // meters --> ft
        feet.textContent = `${amount} meters = ${(amount * mTOft).toFixed(3)} feet`
        // liters --> gals
        gallons.textContent = `${amount} liters = ${(amount * lTOgal).toFixed(3)} gallons`
        // kilograms --> lbs
        pounds.textContent = `${amount} kilograms = ${(amount * kgTOlb).toFixed(3)} pounds`
}
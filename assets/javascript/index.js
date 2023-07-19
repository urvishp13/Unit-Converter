// grab convert-btn from DOM and save it
// grab input field from DOM and save it
const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("amount-input")

// add a click event to btn
    // run convert while passing in number from the input field
convertBtn.addEventListener("click", convert(input.value))

// convert(amount):
function convert(amount) {
    // take the amount and use it to do an Imperial to Metric conversion (i.e. get metric amount)
    metric(amount)
    // take the amount and use it to do a Metric to Imperial conversion (i.e. get imperial amount)
    imperial(amount)
}

// metric(amount):
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
        pounds.textContent = `${amount} kilos = ${(amount * kgTOlb).toFixed(3)} pounds`
}

// imperial(amount):
function imperial(amount) {
    const meters = document.querySelector(".length .imperial")
    const liters = document.querySelector(".volume .imperial")
    const kilograms = document.querySelector(".mass .imperial")

    // conversions
    const ftTOm = 1/3.281
    const galTOl = 1/0.264
    const lbTOkg = 1/2.204

    console.log(ftTOm)

    // take amount and convert and write to DOM in:
        // meters --> ft
        meters.textContent = `${amount} feet = ${(amount * ftTOm).toFixed(3)} meters`
        // liters --> gals
        liters.textContent = `${amount} gallons = ${(amount * galTOl).toFixed(3)} liters`
        // kilograms --> lbs
        kilograms.textContent = `${amount} pounds = ${(amount * lbTOkg).toFixed(3)} kilos`
}
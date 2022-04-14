
function UpdateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');

    const productNumber = productInput.value;
    if (isIncreasing == true) {
        productInput.value = parseInt(productNumber) + 1;

    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;

    }

    //product Price

    const productPrice = document.getElementById(product + '-total')
    productPrice.innerText = productInput.value * price;

}
document.getElementById('case-plus').addEventListener('click', function () {

    UpdateProductNumber('case', 59, true)
    // const input = document.getElementById('value');
    // const a = input.value;
    // input.value = parseInt(a) + 1;

})

document.getElementById('case-mainas').addEventListener('click', function () {


    UpdateProductNumber('case', 59, false)

    // const input = document.getElementById('value');
    // const a = input.value;
    // input.value = parseInt(a) - 1;

})

document.getElementById('phone-plus').addEventListener('click', function () {

    UpdateProductNumber('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function () {

    UpdateProductNumber('phone', 1219, false)
})

function UpdateCaseNumber(isChange) {
    const input = document.getElementById('value');

    const a = input.value;
    if (isChange == true) {
        input.value = parseInt(a) + 1;
    }
    else {
        input.value = parseInt(a) - 1;
    }

}
document.getElementById('case-plus').addEventListener('click', function () {

    UpdateCaseNumber(true)
    // const input = document.getElementById('value');
    // const a = input.value;
    // input.value = parseInt(a) + 1;

})

document.getElementById('case-mainas').addEventListener('click', function () {

    UpdateCaseNumber(false)
    // const input = document.getElementById('value');
    // const a = input.value;
    // input.value = parseInt(a) - 1;

})
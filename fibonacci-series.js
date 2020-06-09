const fibonacci = function () {
    let x = 0;
    let y = 1;
    let z = 0;
    let counterValue = document.getElementById("count").value;
    counterValue = parseInt(counterValue);
    for (let counter = 2; counter < counterValue; counter++) {

        z = x + y;
        x = y;
        y = z;
        document.getElementById("numbers").innerHTML += z;
    }
    Answer = z
    document.getElementById("answer").innerHTML = Answer;
}
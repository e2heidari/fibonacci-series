const fibonacci = function () {
    let text = "0 1 ";
    let x = 0;
    let y = 1;
    let z = 0;
    let counterValue = document.getElementById("count").value;
    counterValue = parseInt(counterValue);
    for (let counter = 2; counter < counterValue; counter++) {

        z = x + y;
        x = y;
        y = z;
        text += z + " ";
        document.getElementById("numbers").innerHTML = text;
    }

    Answer = z
    document.getElementById("answer").innerHTML = Answer;
}
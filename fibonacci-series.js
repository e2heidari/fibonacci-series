const fibonacci = function () {
    let x = 0;
    let y = 1;
    let z = 0;
    let counterValue = document.getElementById("counter").value;
    counterValue = parseInt(counter);
    for (let counter = 2; counter < 10; counter++) {

        z = x + y;
        x = y;
        y = z;
    }
    Answer = z
    document.getElementById("answer").innerHTML = Answer;
}
const fibonacci = function () {
    let x = 0;
    let y = 1;
    let z = 0;
    for (let counter = 2; counter < 10; counter++) {
        z = x + y;
        x = y;
        x = z;
    }
}
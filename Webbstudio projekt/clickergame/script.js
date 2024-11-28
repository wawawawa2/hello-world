var i = 0.125;

function run() {
    i = 0.125;
    while (true) {
        alert(i)
        i *= 2;
        if (i > 1e+100) {
            break
        }
    }
}
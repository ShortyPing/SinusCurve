let angle = 1

while (true) {
    let a = Math.sin(angle) * 100

    console.log(" ".repeat(a <= 0 ? 100 + a : 100) + (a < 0 ? "#" + (" ".repeat(-a).split("").reverse().join("")) : "") + " ".repeat(a <= 0 ? 0 : a) + (a > 0 ? "#" : ""));
    if (angle === 360) {
        angle = 1;
    }
    angle += 0.05;
}
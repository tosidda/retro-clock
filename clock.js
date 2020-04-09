
function clock() {
let fullDate = new Date();
let hours = fullDate.getHours();
let minutes = fullDate.getMinutes();
let seconds = fullDate.getSeconds();

document.getElementById("hour").innerHTML = `${hours}`;
document.getElementById("minute").innerHTML = `:${minutes}`;
document.getElementById("second").innerHTML = `:${seconds}`;
}

setInterval(clock, 100)

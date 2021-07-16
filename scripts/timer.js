var expectedDate = new Date("Nov 26, 2021 23:59").getTime();
const interval = 1000;

var count = setInterval(() => {
    let now = new Date().getTime();

    let distance = expectedDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("timer")[0].innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementsByClassName("timer")[1].innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if(distance < 0) {
        clearInterval(count);
        document.getElementsByClassName("timer")[0].innerHTML = "EXPIRED";
        document.getElementsByClassName("timer")[1].innerHTML = "EXPIRED";
    }
}, interval);
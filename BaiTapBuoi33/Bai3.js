function startCountdown(seconds) {
    let count = seconds;

    const timer = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            console.log("Hết giờ");
            clearInterval(timer);
        }
    }, 1000);
}


startCountdown(5);
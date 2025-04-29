function updateCountdown() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const todayString = `${year}-${month}-${day}`;

  const openTime = new Date(`${todayString}T06:00:00`);
  const closeTime = new Date(`${todayString}T21:30:00`);

  const countdownTime = document.getElementById("countdown");

  let remainingSeconds = 0;

  if (now < openTime || now >= closeTime)
    countdownTime.innerHTML = "Today Closed";
  else {
    remainingSeconds = Math.floor((closeTime - now) / 1000);

    let timer = setInterval(function () {
      if (remainingSeconds <= 0) {
        clearInterval(timer);
        countdownTime.innerHTML = "Today Closed";
      } else {
        const hours = String(Math.floor(remainingSeconds / 3600)).padStart(
          2,
          "0"
        );
        const minutes = String(
          Math.floor((remainingSeconds % 3600) / 60)
        ).padStart(2, "0");
        const seconds = String(Math.floor(remainingSeconds % 60)).padStart(
          2,
          "0"
        );

        countdownTime.innerHTML = `Until closing<br>${hours} : ${minutes} : ${seconds}`;
        remainingSeconds--;
      }
    }, 1000);
  }
}

updateCountdown();

setInterval(updateCountdown, 1000);

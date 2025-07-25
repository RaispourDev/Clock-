window.addEventListener("DOMContentLoaded", function () {
    const secondHand = document.querySelector(".second-hand");  
    const minsHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    const digitalTime = document.getElementById("digital-time");
    const toggleBtn = document.getElementById("toggle-btn");
    const analogClock = document.querySelector(".analog-clock");
    const digitalClock = document.querySelector(".digital-clock");

    function setDate(){
        const now = new Date();

//analog clock

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
        minsHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) +90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;

//digital clock

    const h = String(hour).padStart(2, "0");
    const m = String(mins).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");
    digitalTime.textContent = `${h}:${m}:${s}`;

}

//to refresh feed every second(keep up to date)

    setInterval(setDate, 1000);
    setDate();

// Toggle button logic
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("digital-mode");

        const isDigital = document.body.classList.contains("digital-mode");
        toggleBtn.textContent = isDigital ? "Analog" : "Digital";
  });
});

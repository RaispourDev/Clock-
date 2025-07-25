const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.querySelector('digital-time');
const toggleBtn = document.querySelector('toggle-btn');
const clockContainer = document.querySelector('.clock-container')

let isDigital = false;

function pad(n){
    return n < 10 ? '0' + n : n;
}

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

    const hoursStr = pad(hour);
    const minsStr = pad(mins);
    const secsStr = pad(seconds);

    digitalTime.textContent = `${hoursStr}:${minsStr}:${secsStr}`;
}

//to refresh feed every second(keep up to date)

setInterval(setDate, 1000);
setDate();

//switch between two clocks
toggleBtn.addEventListener('click', () => {
    isDigital = !isDigital;
    clockContainer.classList.toggle('digital-mode');
    toggleBtn.textContent = isDigital ? 'Digital' : 'analog';
})
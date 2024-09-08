const names = ["Barchetta", "Rina", "Reyhan", "Zackwan", "Farabi", "Seno", "Caca", 
    "Fahri", "Zahra", "Raina", "Mei",  "Tian",  "Hurin","Hauzan", "Arya", "Eber", "Audy", "Rham", "Azel", "Dandi"];

let index = 0;

function changeGreeting() {
const greetingElement = document.getElementById('greeting');
greetingElement.textContent = `Hi, ${names[index]}`;
index = (index + 1) % names.length; 
}

setInterval(changeGreeting, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('timer');
    var mainContentElement = document.getElementById('mainContent');
    
    var endDate = new Date('2024-09-09T03:20:00');

    function updateCountdown() {
        var currentTime = new Date().getTime();
        var endTime = endDate.getTime();
        var timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.remove(); 
            mainContentElement.classList.remove('hidden');
        } else {
            var hours = Math.floor(timeLeft / (60 * 60 * 1000));
            var minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
            var seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = (seconds < 10 ? '0' : '') + seconds;
        }
    }

    var countdownTimer = setInterval(updateCountdown, 1000);

    updateCountdown();
});
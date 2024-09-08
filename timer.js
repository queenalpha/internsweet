document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var countdownLabel = document.getElementById('countdownLabel');

    var endDate = new Date('2024-09-09T03:00:00'); 

    function updateCountdown() {
        var currentTime = new Date().getTime();
        var endTime = endDate.getTime();
        var timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.style.display = 'none';
            countdownLabel.style.display = 'none';
            window.location.href = 'index.html';
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

document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var countdownLabel = document.getElementById('countdownLabel');
    var clickButton = document.getElementById('clickButton');
    var pinInput = document.getElementById('pinInput');
    var submitPin = document.getElementById('submitPin');
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    var endDate = new Date('2024-09-03T12:00:00'); 

    function updateCountdown() {
        var currentTime = new Date().getTime();
        var endTime = endDate.getTime();
        var timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.style.display = 'none';
            countdownLabel.style.display = 'none';
            clickButton.classList.remove('d-none'); 
        } else {
            var days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
            var hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            var minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
            var seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
            countdownElement.textContent = 'Tunggu selama ' + days + ' hari ' + hours + ' jam ' + minutes + ' menit ' + (seconds < 10 ? '0' : '') + seconds + ' detik';
        }
    }

    var countdownTimer = setInterval(updateCountdown, 1000);

    clickButton.addEventListener('click', function() {
        myModal.show(); 
    });

    submitPin.addEventListener('click', function() {
        var pin = pinInput.value;
        if (pin === '02022024') {
            window.location.href = 'bukti.pdf'; 
        } else {
            alert('Yah, salah. Masa gak tau sih, coba tanya temanmu');
        }
    });

    updateCountdown();
});

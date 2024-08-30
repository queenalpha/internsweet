document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var countdownLabel = document.getElementById('countdownLabel');
    var clickButton = document.getElementById('clickButton');
    var pinInput = document.getElementById('pinInput');
    var submitPin = document.getElementById('submitPin');
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    //set waktu
    var countdownDuration = 4 * 24 * 60 * 60 * 1000; 
    var now = new Date().getTime();
    var endTime = localStorage.getItem('countdownEndTime');


    //set ketika tidak ada waktu akhir yang tersimpan maka set waktu akhir baru
    if (!endTime) {
        // Jika tidak ada waktu akhir yang tersimpan, set waktu akhir baru
        endTime = now + countdownDuration;
        localStorage.setItem('countdownEndTime', endTime);
    }

    function updateCountdown() {
        var currentTime = new Date().getTime();
        var timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            // set ketika waktu sudah habis maka hapus hitung mundur lalu tombol akan muncul
            clearInterval(countdownTimer);
            countdownElement.style.display = 'none';
            countdownLabel.style.display = 'none';
            clickButton.style.display = 'block';
        } else {
            // set ketika waktu belum habis, maka tampilkan hitung mundur
            var days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
            var hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            var minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
            var seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
            countdownElement.textContent = 'Tunggu ' + days + ' hari ' + hours + ' jam ' + minutes + ' menit ' + (seconds < 10 ? '0' : '') + seconds + ' detik';
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

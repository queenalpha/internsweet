document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var countdownLabel = document.getElementById('countdownLabel');
    var clickButton = document.getElementById('clickButton');
    var pinInput = document.getElementById('pinInput');
    var submitPin = document.getElementById('submitPin');
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    var endDate = new Date('2024-09-03T23:59:59'); // Tanggal akhir hitung mundur
    var now = new Date().getTime();
    var endTime = localStorage.getItem('countdownEndTime');

    if (!endTime) {
        // Jika tidak ada waktu akhir yang tersimpan, set waktu akhir dengan tanggal yang ditentukan
        endTime = endDate.getTime();
        localStorage.setItem('countdownEndTime', endTime);
    }

    function updateCountdown() {
        var currentTime = new Date().getTime();
        var timeLeft = endTime - currentTime;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            countdownElement.style.display = 'none';
            countdownLabel.style.display = 'none';
            clickButton.style.display = 'block'; // Tampilkan tombol "Sini Masuk!!!" setelah hitung mundur selesai
        } else {
            var days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
            var hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            var minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
            var seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
            countdownElement.textContent = 'Tunggu ' + days + ' hari ' + hours + ' jam ' + minutes + ' menit ' + (seconds < 10 ? '0' : '') + seconds + ' detik';
        }
    }

    var countdownTimer = setInterval(updateCountdown, 1000);

    clickButton.addEventListener('click', function() {
        myModal.show(); // Tampilkan modal Bootstrap saat tombol "Sini Masuk!!!" diklik
    });

    submitPin.addEventListener('click', function() {
        var pin = pinInput.value;
        if (pin === '02022024') {
            window.location.href = 'bukti.pdf'; 
        } else {
            alert('Yah, salah. Masa gak tau sih, coba tanya temanmu');
        }
    });

    // Panggil awal untuk memperbarui hitung mundur
    updateCountdown();
});

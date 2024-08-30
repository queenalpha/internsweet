document.getElementById('clickButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('submitPin').addEventListener('click', function() {
    var pin = document.getElementById('pinInput').value;
    if (pin === '02022024') {
        window.location.href = 'bukti.pdf'; 
    } else {
        alert('Yah, salah. masa gatau sihh, coba tanya temenku');
    }
});

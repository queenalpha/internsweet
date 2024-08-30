document.getElementById('clickButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('submitPin').addEventListener('click', function() {
    var pin = document.getElementById('pinInput').value;
    if (pin === '123') {
        window.location.href = 'bukti.pdf'; // Ganti 'yourfile.pdf' dengan path file PDF yang diinginkan
    } else {
        alert('Incorrect PIN');
    }
});

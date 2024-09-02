document.addEventListener("DOMContentLoaded", function () {
    var _0x2fdb35 = document.getElementById("countdown");
    var _0x106bf9 = document.getElementById('countdownLabel');
    var _0x367382 = document.getElementById('clickButton');
    var _0x19f55a = document.getElementById("pinInput");
    var _0x911865 = document.getElementById('submitPin');
    var _0x5e4cdb = new bootstrap.Modal(document.getElementById("myModal"));
    var _0x327487 = new Date('2024-09-02T10:15:00');
    function _0x321a4b() {
      var _0x10a6fa = new Date().getTime();
      var _0x51b560 = _0x327487.getTime();
      var _0x39725f = _0x51b560 - _0x10a6fa;
      if (_0x39725f <= 0x0) {
        clearInterval(_0x44d301);
        _0x2fdb35.style.display = 'none';
        _0x106bf9.style.display = "none";
        _0x367382.classList.remove("d-none");
      } else {
        var _0x3db9e4 = Math.floor(_0x39725f / 86400000);
        var _0x21b75a = Math.floor(_0x39725f % 86400000 / 3600000);
        var _0x489656 = Math.floor(_0x39725f % 3600000 / 60000);
        var _0x113a0a = Math.floor(_0x39725f % 60000 / 0x3e8);
        document.getElementById("days").textContent = _0x3db9e4;
        document.getElementById("hours").textContent = _0x21b75a < 0xa ? '0' + _0x21b75a : _0x21b75a;
        document.getElementById("minutes").textContent = _0x489656 < 0xa ? '0' + _0x489656 : _0x489656;
        document.getElementById('seconds').textContent = _0x113a0a < 0xa ? '0' + _0x113a0a : _0x113a0a;
      }
    }
    var _0x44d301 = setInterval(_0x321a4b, 0x3e8);
    _0x367382.addEventListener("click", function () {
      _0x5e4cdb.show();
    });
    _0x911865.addEventListener("click", function () {
      var _0x34835f = _0x19f55a.value;
      if (_0x34835f === "21061961") {
        window.location.href = 'internsweetLetter.pdf';
      } else {
        alert("Yah, salah. Masa gak tau sih, coba cari atau kalo masih gabisa tanya ADMINNYA YA");
      }
    });
    _0x321a4b();
  });
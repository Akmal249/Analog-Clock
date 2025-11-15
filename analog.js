const detik = document.getElementsByClassName("hand")[2];
const menit = document.getElementsByClassName("hand")[0];
const jam = document.getElementsByClassName("hand")[1];

function update(rate) {
  setTimeout(function() {
    const tanggal = new Date();
    let s = tanggal.getSeconds();
    let m = tanggal.getMinutes();
    let h = (tanggal.getHours() > 12) ? tanggal.getHours() - 12:tanggal.getHours();
    let tmp = (360 / 12) / (360 / (360 / 60 * m)) + (360 / 12 * h);
    detik.style.transform = `rotate(calc((360deg / 60) * ${s}))`;
    menit.style.transform = `rotate(calc((360deg / 60) * ${m}))`;
    jam.style.transform = `rotate(${tmp}deg)`;
    update(100);
  }, rate);
}

update(0);

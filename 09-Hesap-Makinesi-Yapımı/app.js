let dugme = document.getElementsByTagName("button");
//console.log(dugme); 16 buton var
let ekran = document.getElementsByClassName("screen")[0];
let hesapla = document.getElementById("hesapla");
let temizle = document.getElementById("temizle");

//ekrana yani screen kısmına yazdırmak için
for (var i = 0; i < 16; i++) {
    if (i != 14 && i != 15) {
        dugme[i].addEventListener("click", yazdir);
    }
}

function yazdir() {
    ekran.value = ekran.value + this.value;
}
//hesaplama işlemi için
hesapla.addEventListener("click", hesap);

function hesap() {
    ekran.value = eval(ekran.value);
}
//temizlemek için
temizle.addEventListener("click", sil);

function sil() {
    ekran.value = "";
}
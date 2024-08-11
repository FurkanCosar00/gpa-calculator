let dersAdi = prompt('Dersin adı nedir?')
let kacAdet = Number(prompt('girmek istediğiniz sınav sonucu sayısını yazınız.'));
let toplam = 0;

for (let i = 1; i <= kacAdet; i++) {
    toplam += Number(prompt('sınavdan aldığınız notu giriniz.'));
}

let sonuc = (toplam / kacAdet);

if(toplam / kacAdet >= 50) {
    alert('Tebrikler! ' + dersAdi + ' dersinden geçtiniz. Not ortalamanız ' + sonuc);
} else {
    alert('Üzgünüm ' + dersAdi + ' dersinden kaldınız. Not ortalamanız ' + sonuc);
}

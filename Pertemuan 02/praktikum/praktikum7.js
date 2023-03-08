/** DEKLARASI */
function menghitungUmur(tahun) {
    const sekarang = 2023;
    const umurSekarang = 2023 - tahun;

    return umurSekarang;
}
console.log(menghitungUmur(2002));

/** FUNCTION EXPRESSION */
const menghitungUmur = function (tahun) {
    const sekarang = 2023;
    const umur = sekarang - tahun;
    const umurSekarang = `Pada tahun ini umur kamu adalah ${umur}`;

    return umurSekarang;
}
console.log(menghitungUmur(2002));
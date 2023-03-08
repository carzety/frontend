/** OBJECT PENGINGAT POSISI DENGAN PARAMETER KATA KUNCI
const customer = {
    nama : "aya",
    umur : 20,
    tinggi : 165,
    berat : 50,
    domisili : "jakarta"
};

console.log(customer.umur); */

/** OBJECT PERULANGAN */
const customer = {
    nama : "aya",
    umur : 20,
    tinggi : 165,
    berat : 50,
    domisili : "jakarta"
};

for (const label in customer) {
    console.log(`${label}: ${customer[label]}`);
}
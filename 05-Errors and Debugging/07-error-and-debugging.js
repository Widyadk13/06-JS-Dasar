/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
console.log("- type error = Membuat instance yang mewakili kesalahan yang terjadi ketika variabel atau parameter bukan dari tipe yang valid");
console.log("- references error = Membuat instans yang mewakili kesalahan yang terjadi saat menonaktifkan referensi yang tidak valid");
console.log("- range error = Membuat instans yang mewakili kesalahan yang terjadi ketika variabel atau parameter numerik berada di luar rentang yang valid");
console.log("- syntax error = Membuat instans yang mewakili kesalahan sintaks");


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log("- Hasil yang akan ditampilkan jika menjalankan kode dibawah ini adalah error. Hal tersebut disebabkan karena panggilan terhadap salaryWithConst tidat terdeteksi");
console.log("- Dari hasil error yang ditunjukkan tergolong kedalam jenis error referenceError");
console.log("- Alasan terjadinya error disebabkan karena hasil dari salaryWithConst belum dideklerasikan terlebih dahulu sehingga akan salaryWithConst tidak dapat diakses atau dideteksi oleh user");

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
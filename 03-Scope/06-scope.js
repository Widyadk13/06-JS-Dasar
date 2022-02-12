/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
console.log("Scope merupakan suatu konsep dalam flow data variabel atau  bisa dosebut dengan alur dari varibale")
console.log("Terdapat 2 jumlah variabel scope pada JavaScript diantaranya adalah global scope dan local scope")
console.log("Global scope merupakan suatu variabel yang bisa diakses dimanapun dalam suatu file dan harus dideklarasikan bersama ddengan block")
console.log("Local scope merupakan cara untuk mendeklarasikan suatu variabel yang terdapat didalam block seperti function, conditional, dan looping. Berdasarkan dengan definisi tersebut, local scope hanya bisa diakses didalam block saja dan tidak bisa diakses apabila variabel tersebut berada diluar block")

const nama = "Siswa";

function namaSiswa(a) {
  console.log("nama siswa kelas 6 tahun 2021 : " + a);
} 
  console.log(namaSiswa("Widya"));

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
console.log("Berdasarkan hasil console.log maka akan menampilkan nama Maria");
console.log("Hal tersebut disebabkan karena pada console.log yang diinginkan adalah parameter yang terdapat pada function (printFirstName). Mengapa tidak  John Watson yang ditampilkan karena berada pada luar block");
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}
console.log(printFirstName("Mariah Carey"));

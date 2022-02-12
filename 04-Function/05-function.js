/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE

function taxCalc(a) { 

    if(a < 5000000) {
        let b = a * 0;
        console.log("Salary : " + a);
        console.log("total pajak yang harus kamu bayarkan: " + (b));
    } else if(a >= 5000000 && a < 10000000) {
        let b = a * 5/100;
        console.log("Salary : " + a);
        console.log("total pajak yang harus kamu bayarkan: " + (b));
    } else if(a >= 10000000 && a < 20000000) {
        let b = a * 10/100;
        console.log("Salary : " + a)
        console.log("total pajak yang harus kamu bayarkan: " + (b));
    } else {
        let b = a * 20/100;
        console.log("Salary : " + a);
        console.log("total pajak yang harus kamu bayarkan: " + (b));
    }
}
taxCalc(4500000);
// console.log(taxCalc(4500000));
// expected output; "salary = 4.500.000; taxCalc should be 0"


// / Soal - 02
// / BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
    let checkBMI = (weight / (height * height) * 10000);

    if (checkBMI < 18.5) {
        console.log("under weight");
    } else if(checkBMI> 18.5 && checkBMI < 24.9) {
        console.log("normal");
    } else if(checkBMI > 25 && checkBMI < 29.9) {
        console.log("over weight");
    } else if(checkBMI > 30 && checkBMI < 34.9) {
        console.log("obese");
    } else {
        console.log("extremely obese");
    } 
        return checkBMI
}
checkBMI(160, 80)


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE

function convToUpperCase(sentence) {
    return sentence.replace(/\w\S*/g, function(kalimat)
        { return kalimat.charAt(0).toUpperCase() + kalimat.substr(1).toLowerCase() } )
}
console.log(convToUpperCase("o genki desu ka?"));


// / Soal - 04
// / Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

// /// Spesifikasi
// /// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
// /// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
// /// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

// /// Parameter
// /// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

// /// Result Value
// /// (String) huruf yang pertama kali tidak ada kembarannya

// /// EDIT HERE
function firstNonRepeatedChar(checkWord) { 
    let huruf;
    for (let i = 0; i < checkWord.length; i++) {
        huruf = checkWord[i];
        if (huruf == " ") {
          return "kata tidak boleh dipisah"
        } 
    }
    for (let i = 0; i < checkWord.length; i++) {
      huruf = checkWord[i];
      let checking = false;
      
      for (let j = 0; j < checkWord.length; j++) {
        if (huruf == checkWord[j] && j != i) {
          checking = true;
        }
        
      }
      if (checking == false) {
        return huruf;
      }
    } return "";

  }
console.log(firstNonRepeatedChar("hello world"));
/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100

function bilanganPrimaAwal(a) {
  let bilanganPrimaAkhir = Math.sqrt(b);

/// EDIT HERE
for(var a = 2; a <= bilanganPrimaAkhir; a++) {
  if(b % a == 0)
    return false;
  }
    return true;
}

for(var b = 2; b < 100; b++) {
  if(bilanganPrimaAwal(b)) {
  }
    console.log(b);
}
// expected output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let a = 1;

/// EDIT HERE
while (primeCounter < 50) { a++;
  let eliminasi = false;

for (let b = 2; b <= a; b++) {
  if (a % b == 0 && a !== b) {
    eliminasi = true;
  }
}
  
  if (eliminasi == false) {
    primeCounter++;  
    fiftiethPrime = a;
  }
}

console.log(fiftiethPrime)
// expected output; 229


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let c = 0;

/// EDIT HERE
do {
  c++;
  if(c % 2 == 1) {
    oddCounter++;
    if(oddCounter == 50) {
      fiftiethOdd = c;
      console.log(fiftiethOdd);
    }
  }
} 

while (oddCounter < 50)
// expected output; 99
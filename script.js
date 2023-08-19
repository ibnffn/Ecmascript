// Variasi penulisan arrow function
// Tergantung pada penggunaanya arrow function dapat ditulis dengan berbagai macam cara:

// 	* Fungsi tanpa argumen
// 	* Fungsi yang hanya memiliki satu argumen saja
// 	* Fungsi yang memiliki lebih dari satu argumen
// 	* Fungsi yang lebih kompleks dan harus ditulis dalam format lebih dari 	  satu baris (multiline)

// contoh fungsi tanpa argumen =
const logSomething = () => {
  console.log("Something");
};
logSomething();

// Contoh fungsi satu argumen
const multiplyByTwo = (n) => {
  console.log(n * 2);
};
multiplyByTwo(2);
//result
// 4;

const something = (a) => {
  console.log(a * a);
};
something(3);
//result
// 9;

// Contoh fungsi yang memiliki lebih dari satu argumen saja , "harus menggunakan dalam kurung pada argumen (x,y) ()"
const multiply = (x, y) => {
  console.log(x * y);
};
multiply(2, 2);
//result
// 4;

const somethings = (a, b) => {
  console.log(a + b);
};
somethings(1, 1);
// result
// 2

// Contoh fungsi multiline (format lebih dari satu baris) =
// 	* Ketika ingin menuliskan fungsi yang lebih kompleks dan tidak bisa disederhanakan menjadi satu baris,maka dapat menggunakan kurung kurawal.
// 	* Jika menuliskan fungsi dengan kurung kurawal,untuk mengembalikan nilai dari fungsi tersebut,harus secara =
const isCheckAge = (age) => {
  if (age >= 10 && age <= 20) {
    return true;
  } else if (age >= 21 && age <= 30) {
    return false;
  } else {
    console.log("isi dengan benar");
  }
};
console.log(isCheckAge(10));
console.log(isCheckAge(30));
console.log(isCheckAge(9));
// result
// true
// false
// isi dengan benar
// undefined

// Spread syntax diperkenalkan pada JavaScript dengan spesifikasi ES6.
// * MDN kurang mendefinisikan Spread Syntax (...) sebagai berikut:
//   Spread Syntax(...)mempermudah untuk mengekspan sebuah iterables seperti string     atau array tanpa harus menuliskan satu persatu atau pada pasangan key-value     dalam sebuah object.

// * Sederhananya spread syntax dapat dipahami sebagai berikut :
// 	* Dituliskan dengan tiga tanda titik...
// 	* Dapat digunakan pada iterables seperti Array dan string
// 	* Mengkspan Array atau iterables lainnya menjadi element terpisah
// 	* Dapat menyediakan argumen kepada sebuah fungsi dari bentuk Array 	  	  iterables lainnya.

// * Contoh paling sederhana adalah ketika memiliki data array yang semua elemennya
//   ingin disisipkan ke dalam array yang lain kita cukup menuliskan...didepan nama
//   variabel seperti contoh kode berikut:
let numbers = [3, 4];
let additionalNumbers = [1, 2, ...numbers, 5, 6];
console.log(additionalNumbers);

// * Dapat digunakan mengekspan sebuah array menjadi argumenargumen sebuah fungsi.
// * Sebelum adanya spread syntax proses ini hanya dapat dilakukan dengan fungsi.apply().
// Spread Syntax menggunakan function
const theNumbers = [2, 5, 75];
function sumThreeNumbers(a, b, c) {
  return a, b, c;
}
sumThreeNumbers.apply(null, theNumbers);
console.log(theNumbers);
// result
// [2, 5, 75]

// Jika menggunakan spread syntax tidak menggunakan .apply()
const theNumberss = [50, 5, 2];
function sumThreeNumberss(a, b, c) {
  return a + b + c;
}
sumThreeNumbers(...theNumbers);
console.log(theNumbers);
// result
// [2, 5, 75]

// Pada dasarnya yang dilakukan adalah menempelkan semua properti dari sebuah
// object ke dalam object yang baru
const obj1 = {
  firstName: "jhon",
  lastName: "lennon",
};

const obj2 = { birthdate: "09 Oktober 1940" };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// result
// firstName: 'jhon', lastName: 'lennon', birthdate: '09 Oktober 1940'
// birthdate:"09 Oktober 1940"
// firstName: "jhon"
// lastName : "lennon"
// [[Prototype]]: Object

// Menggunakan Assign
const obj4 = {
  firstNames: "jhon",
  lastNames: "lennon",
};

const obj5 = { birthdates: "09 Oktober 1940" };
const obj6 = Object.assign(obj4, obj5);
document.getElementById("demo").innerText = obj6;
console.log(obj6);
// result
// {firstNames: 'jhon', lastNames: 'lennon', birthdates: '09 Oktober 1940'}
// firstName: 'jhon', lastName: 'lennon', birthdate: '09 Oktober 1940'
// birthdate:"09 Oktober 1940"
// firstName: "jhon"
// lastName : "lennon"
// [[Prototype]]: Object

// FOR Of
// * Syntax untuk operasi perulangan baru yang diperkenalkan pada ES6
// * Digunakan untuk melakukan perulangan untuk berbagai jenis tipe data seperti
//   (Array,string,Map,Set,dan lain-lain).
// * Variable dapat didekllarasikan dengan const,let atau var
// * Iterables adalah semua tipe data yang dapat dioperasikan pada perulangan

const numbers1 = [100, 200, 300];
for (const number of numbers1) {
  console.log(number);
}
// result
//100
//200
//300

const strings = "abcde";
for (string of strings) {
  console.log(strings);
}
//Output:
// abcde

// Perbedaan For of vs For In
// * Perbedaan mendasarnya adalah for-in digunakan untuk pengulangan pada properti sebuah Object,
// * Jika for-in digunakan pada Array/string maka hasil dari perulangannya adalah indeks dari Array/string tersebut.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  console.log(`${key} => ${obj[key]}`);
}
// a => 1
// b => 2
// c => 3

const array = ["a", "b", "c", "d"];
for (const index in array) {
  console.log(`${index} => ${array[index]}`);
}
//Output index in array
// 0 => a
// 1 => b
// 2 => c
// 3 => d

const array1 = [1, 2, 3];
for (const key in array1) {
  console.log(array1[key]);
}
//result
//1
//2
//3

// contoh hanya panggil key saja maka akan tercetak :
const array2 = [1, 2, 3];
for (const key in array1) {
  console.log(key);
}
//result -> perhatikan jumlah angka dalam indeks,dan indeksnya ada berapa
//0
//1
//2

// /* diberikan sekumpulan angka dalam array tentukan apakan sekumpulan angka tersebut merupakan deret aritmatika atau bukan pada fungsi terbentukDeretAritmatika(array)
// ex.
// array = [1,2,3,4,5,6] => angka punya selisih yang sama yaitu 1 jadi ini merupakan deret aritmatika
// test cases ;
// 2,4,6,8 true
// 2,6,18,54 false
// 1,2,3,4,7,9 false
// 1,3,5,7,9 true */

// function tentukanDeretAritmatika(arr) {
//     var hasil = 0; 
//     for (var i=0; i<arr.length-2; i++ ){ 
//         if ((arr[i+1]-arr[i]) === (arr[i+2]-arr[i+1])){
//             hasil = true
//         } 
//         else {
//          hasil = false;  
//         } 
//     }
//     return hasil;
// }
  
//   // TEST CASES
//   console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
//   console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
//   console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
//   console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
//   console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false 




// function tentukanDeretArtimatika(number){
//     var selisih = number [1] - number [0];
//     var value = true;
//     for(var i = 0; i < number.length - 1; i++){
//         var selisih2 = number [i+1] - number [i];
//         console.log(selisih2);
//         if(selisih2 !== selisih){
//             value = false;
//         }
//     }
//     return value;
// }
// console.log(tentukanDeretArtimatika([2,4,6,8])); // true
// console.log(tentukanDeretArtimatika([2,6,18,54])) // false
// console.log(tentukanDeretArtimatika([1,2,3,4,7,9])) //false
// console.log(tentukanDeretArtimatika([1,3,5,7,9])) // true

  

// function numberProcessing(numberArr) {
//     var min = Math.min (...numberArr);
//     var max = Math.max (...numberArr);
//     var sum = numberArr.reduce ((a,b) => a+b);
//     var avg = Math.ceil (sum/numberArr.length);
//     var odds = []
//     var evens = []
//     for (i = 0; i < numberArr.length; i++) {
//       if (numberArr[i] % 2 == 0){
//         evens.push (numberArr[i])
//       } 
//       else {
//         odds.push (numberArr[i])
//       }
//     }
//     return 'Min : ' + min + ',' + ' Max : ' + max + ',' + ' Mean : ' + avg + ' Odds : ' + odds + ' Evens : ' + evens
// }

//   console.log (numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
//   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"


// diberikan sekumpulan angka dan cari pasangan terbesar dari kumpulan angka tersebut;
//    ex 
//    number = 641573, number dapat di pecah menjadi beberapa pasang, yaitu 64, 41, 15, 57, 73
//    dari beberapa pasang tersebut didapati pasangan dengan nilai terbesar 73

// function pasanganTerbesar(number) {
//      var max = 0
//      var number = number.toString() 
//      for (i = 0; i < number.length - 1; i++){ 
//        var pasangan = number[i] + number [i+1];
//        if (max < pasangan){
//          max = pasangan
//        }
//      }
//      return max;
// }

//   console.log (pasanganTerbesar(12783456)); //83
//   console.log (pasanganTerbesar(910233)); // 91
//   console.log (pasanganTerbesar(71856421)); // 85
//   console.log (pasanganTerbesar(7991823)); // 99

// function perkalianUnik(arr){
//     var hasil = [];
//     for(i=0;i<arr.length; i++){
//         var angka = 1;
//         for(j=0; j<arr.length;j++){
//             if(j !== i){
//                 angka *= arr[j]
//             }
//         }
//         hasil.push(angka)
//     }
//     return hasil; 
//     // you can only write your code here!
// }


// //   // TEST CASES
//   console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
//   console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
//   console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
//   console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
//   console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


  function targetTerdekat(arr) {
    return arr.indexOf('x') - arr.indexOf('o') > 0 ? arr.indexOf('x') - arr.indexOf('o') : (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
  }

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', ' ', 'o', ' ', 'x', 'x', ' ', 'x'])); // 2

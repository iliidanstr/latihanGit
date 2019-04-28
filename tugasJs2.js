/* 1
  akses tiap nilai di dalam array ini
  1. [[[[[[[1, 2, 3, 4, 5]]]]]]]
  2. [[1], [2, 3], [4, [5, 6]]]
  3. [1, [2, [3, [4, [5]]]]]
  4. [[[1, [2], 3, [4], [[[[5]]]]]]]
  5. [1, [[2, [3]], [4,[[5, 6, [[7, 8]]]]], 9, [[10]]]

*/
// var numbers = [[[[[[[1, 2, 3, 4, 5]]]]]]];
// console.log(numbers[0][0][0][0][0][0][0])
// console.log(numbers[0][0][0][0][0][0][1])
// console.log(numbers[0][0][0][0][0][0][2])
// console.log(numbers[0][0][0][0][0][0][3])
// console.log(numbers[0][0][0][0][0][0][4])

// var numbers = [[1], [2, 3], [4, [5, 6]]]
// console.log(numbers[0][0])
// console.log(numbers[1][0])
// console.log(numbers[1][1])
// console.log(numbers[2][0])
// console.log(numbers[2][1][0])
// console.log(numbers[2][1][1])

// var numbers = [1, [2, [3, [4, [5]]]]]
// console.log(numbers[0])
// console.log(numbers[1][0])
// console.log(numbers[1][1][0])
// console.log(numbers[1][1][1][0])
// console.log(numbers[1][1][1][1][0])

// var numbers = [[[1, [2], 3, [4], [[[[5]]]]]]]
// console.log(numbers[0][0][0])
// console.log(numbers[0][0][1][0])
// console.log(numbers[0][0][2])
// console.log(numbers[0][0][3][0])
// console.log(numbers[0][0][4][0][0][0][0])

// var numbers = [1, [[2, [3]], [4,[[5, 6, [[7, 8]]]]], 9, [[10]]]]
// console.log(numbers[0])
// console.log(numbers[1][0][0])
// console.log(numbers[1][0][1][0])
// console.log(numbers[1][1][0])
// console.log(numbers[1][1][1][0][0])
// console.log(numbers[1][1][1][0][1])
// console.log(numbers[1][1][1][0][2][0][0])
// console.log(numbers[1][1][1][0][2][0][1])
// console.log(numbers[1][2])
// console.log(numbers[1][3][0][0])


/* 2
  Diberikan sebuah array dengan kumpulan angka didalamnya, ubah array menjadi array 2 dimensi
  dimana berisikan pengelompokan angka dengan urutan genap, ganjil dan habis dibagi 3:

  function mengelompokkanAngka(array)
  ex.
    array = [2, 4, 6], maka akan di kelompokan menjadi 3:
    [2, 4] => genap
    [] => ganjil
    [6] => angka yang habis dibagi 3
    dan hasilnya: [ [2, 4], [], [6] ]


  TEST CASES:

  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

  /* 3
  Diberikan sekumpulan string dengan nama binatang dalam array, kelompokan string tersebut berdasarkan huruf awalnya dan urutkan
  
  function groupAnimals(array)
  ex.
    array = [cacing, anoa, ayam] hasil pengelompokannya [['ayam', 'anoa'], ['cacing]]

  TEST CASES:
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
*/


// function mengelompokkanAngka(nilai){
// var genap =  []
// var ganjil = []
// var div3 = []
// for(i=0; i <= nilai.length-1; i++){
//   if(nilai[i]%2 == 0){
//     genap.push(nilai[i]);
//   }
//   else if(nilai[i]%3 == 0){
//     div3.push(nilai[i]);
//   }
//   else{
//     ganjil.push(nilai[i]);
//   }
// }
// return [genap, ganjil, div3]
// }
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
//   console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
//   console.log(mengelompokkanAngka([])); // [ [], [], [] ]


function groupAnimals(array) {
  array.sort()
  var temp = [];
  var temp1 = [];
  var temp2 = [];
  var temp3 = [];

  var getArray = [temp,temp1,temp2,temp3];

  for ( i = 0; i  < array.length ; i ++){
    // console.log(animals[i][0]);

    if (array[i][0] === ['a'][0]) {
        temp.push(array[i])
    } 
    else if (array[i][0] === ['c'][0]){
        temp1.push(array[i])
    } 
    else if (array[i][0] === ['k'][0]){
        temp2.push(array[i])
    } 
    else if (array[i][0] === ['u'][0]){
          temp3.push(array[i])
    }
  }

return getArray
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
// var people = [[1, 'Dimitri', 'Hacktiv8'],
//     [2, 'Dhani', 'Hacktiv8'],
//     [3, 'Icha', 'Hacktiv8']];

    
//   console.log('ID:'+ people[0][0] + ' Name: ' + people [0][1] + ' Company: ' + people [0][2])
//   console.log('ID:'+ people[1][0] + ' Name: ' + people [1][1] + ' Company: ' + people [1][2])
//   console.log('ID:'+ people[2][0] + ' Name: ' + people [2][1] + ' Company: ' + people [2][2])

// function tampilkan(array){
//     for(i=0 ; i > people.length ; i++ ){
//         for(j=0 ; j > people.length ; j++){
//             if (j === 0){
//             console.log(' ID: ' + people [i][j])
//             }
//             else if (j === 1){
//             console.log(' Name: ' + people [i][j])
//             }
//             else if(j === 2){
//             console.log(' Company: ' + people [i][j])
//             }
        
//         }
//     console.log()
//     }
// }


// var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

// console.log(text.split(','))


// var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

// function cariModus(arr){
// var arrModus = [], isSame = false;
  
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i+1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         isSame = true;
//         arrModus.push(arr[i]);
//       } else {
//         isSame = false;
//       }
//     }
//   }

//   return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
// }


// // TEST CASES
// console.log(cariModus([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ])); //1


// function testSort(arr){
//     var panjang = arr.length;
//     for (var i = panjang-1; i>=0; i--){
//       for(var j = 1; j<=i; j++){
//         if(arr[j-1]>arr[j]){
//             var temp = arr[j-1];
//             arr[j-1] = arr[j];
//             arr[j] = temp;
//          }
//       }
//     }
//     return arr;
//  }

//  console.log(testSort([3,1,2,4,5]));



// function median(values){
// 	values.sort(function(a,b){
//   	return a-b;
//     });
//   var half = Math.floor(values.length / 2);
  
//   if (values.length % 2)
//   	return values[half];
//   else
//   	return (values[half - 1] + values[half]) / 2.0;
// }

// console.log(median([1,2,3]));
// console.log(median([1,2,3,4]));











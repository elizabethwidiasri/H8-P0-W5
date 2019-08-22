function sorting(arrNumber) {
  //utk cari angka yg paling besar
    for (var i=0; i<arrNumber.length-1; i++) {
      for (var j=0; j<arrNumber.length-(i+1); j++) {
        console.log(arrNumber[j], arrNumber[j+1]);
        
        if (arrNumber[j] > arrNumber[j+1]) {
        
         [arrNumber[j], arrNumber[j+1]] = [arrNumber[j+1], arrNumber[j]]
        }
      }  
    } 
    
return arrNumber
}
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));
  
function getTotal(arrNumber) {
    // utk cari frekuensi kemunculan dr angka terbesar itu
    if (arrNumber.length === 0) {
      return "''"
    }
    var count = 0
    var max = arrNumber[arrNumber.length-1]
    for (var i=0; i<arrNumber.length; i++) {
      if (arrNumber[i] === max) {
        count++
      }
    }
    return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${count} kali`
}
// console.log(getTotal([ 2, 4, 4, 5, 6, 8, 8, 8 ]));

  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest
}
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  
  // console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  // console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  // console.log(mostFrequentLargestNumbers([]));
  //''
  
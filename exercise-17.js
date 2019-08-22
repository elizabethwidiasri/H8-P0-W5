// function kaliTerusRekursif(angka) {
//     var str = angka.toString()
//     while(str.length > 1) {
//         var res  = 1
//         for (var j=0; j<str.length; j++) {
//             res *=  Number(str[j])
//         }
//         str = res.toString()
//     }
//     return Number(str)
// }

function kaliTerusRekursif(angka) {
    var str = angka.toString()
    if (str.length === 1) {
        return angka
    } else {
        var res  = 1
        for (var j=0; j<str.length; j++) {
            res *=  Number(str[j])
        }
        return kaliTerusRekursif(res)
    }
}



  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
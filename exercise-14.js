function changeVocals(str) {
    // Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf
    // vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i
    // -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
    var kamus = 'abcdefghijklnopqrstuvwxyz'
    var vocal = 'aiueo'
    var arr = str.split('')

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < vocal.length; j++) {
            for (var k = 0; k < kamus.length; k++) {
                if (arr[i].toLowerCase() === vocal[j]) {
                    if (arr[i] === kamus[k]) {
                        arr[i] = kamus[k + 1]
                    }
                }
            }
        }
    }
    str = arr.join('')
    return str
}
//  console.log(changeVocals('Sergei Dragunov'))
 
 
function reverseWord(str) {
    // Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan
    // reverseWord
    
    var reversed = ''
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    str = reversed
    return str
}
//  console.log(reverseWord('Sergei Dragunov'))

function setLowerUpperCase(str) {
    // Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil
    // dan sebaliknya
    
    var splitted = str.split('')
    var up = str.toUpperCase()
    var low = str.toLowerCase()
    for (var i = 0; i < splitted.length; i++) {
        if (splitted[i] !== up[i]) {
            splitted.splice(i, 1, up[i])
        } else if (splitted[i] !== low[i]) {
            splitted.splice(i, 1, low[i])
        }
    }
    var joined = splitted.join('')
    str = joined
    return str
}
//  console.log(setLowerUpperCase('Sergei Dragunov'))
    
function removeSpaces (str) {
    //Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
    
    var trimmed = ''
    for (var i=0; i<str.length; i++) {
        if (str[i] !== ' ') {
            trimmed += str[i]
        }
    }
    str = trimmed
    return str
}
//  console.log(removeSpaces('Sergei Dragunov'))

  function passwordGenerator (name) {
    //compile all requirement

    //Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga 
    if (name.length < 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }
    var vocal = changeVocals(name)
    var reverse = reverseWord(vocal)
    var ul = setLowerUpperCase(reverse)
    var space = removeSpaces(ul)
    return space
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
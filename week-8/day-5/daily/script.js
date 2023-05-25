const anagram = (str1 , str2) => {
    let str1array = [...str1.replaceAll(' ' , '').toLowerCase()];
    let str2array = [...str2.replaceAll(' ' , '').toLowerCase()];
    str1array = str1array.sort().toString()
    str2array = str2array.sort().toString()
    return str1array === str2array
}

let res = anagram("School master" , "The classroom");

console.log(res);
//map \ filter \ reduce -------------------------------------------------------------------

let arr_map = arr1.map(x => x * 2);
let arr_filter = arr1.filter(x => x > 2);
let arr_reduce = arr1.reduce((accumulator, currentValue) => accumulator + currentValue);
let str_arr_reduce = str_arr.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);


console.log(arr_map);
console.log(arr_filter);
console.log(arr_reduce);
console.log(str_arr_reduce);
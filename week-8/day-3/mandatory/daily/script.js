const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

let getCarHonda = carInventory => carInventory.find(element => element['car_make'] == 'Honda');
let part1_res = getCarHonda(inventory);

let sortCarInventoryByYear = carInventory => carInventory.sort( (element1, element2) => element1.car_year - element2.car_year);
let part2_res = sortCarInventoryByYear(inventory);

console.log(part2_res);
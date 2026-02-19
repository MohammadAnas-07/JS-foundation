/* 1. Declare an array named `teaFlavors` that contains the strings `green tea` , `black tea` , and `oolong tea`.
Access the first element of the array and store it in a variable named `firstTea` */

/* let teaFlavors = ["green tea", "black tea" , "oolong tea"]

const firstTea = teaFlavors[0]
console.log(firstTea) */


/* 2.Declare an array named `cities` containing "London", "Tokyo", "Paris" and "New York".
Access the third element in the array and store it in a variable named `favoriteCity` */

/* let cities = ["London", "Tokyo", "Paris", "New York"]

const favoriteCity = cities[2]
console.log(favoriteCity) */

/* 3. You have an array named `teaTypes` containing "herbal tea" , "white tea", and "masala chai",
Change the second element of the array to "jasmine tea". */

/* let teaTypes = ["herbal tea", "white tea", "masala chai"]
let newArr = teaTypes.splice(1,1,"jasmine tea")
console.log(teaTypes) */


/* 4. Declare an array named `citiesVisited` containing "Mumbai" and "Sydney"
Add "Berlin" to the array using the `push` method */

/* let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited) */

/* 
5.You have an array named `teaOrder` with "chai", "iced tea" , "matcha", and "earl grey".
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder` */
/* 
let teaOrder = ["chai", "iced tea" , "matcha", "earl grey"]
const lastOrder = teaOrder.pop()
 */


/* 6.You have an array named `popularTeas` containing "green tea" ,"oolong tea" and "chai".
Create a soft copy of this array named `softCopyTeas` */

/* let popularTea = ["green tea","oolong tea", "chai"]
const sofCopyTeas = [...popularTea]
console.log(sofCopyTeas) */

/* 7. You have two arrays: `europeanCities` containing "Paris" and "Rome" and `asianCities` containing "Tokyo" and "Bangkok"
Merge thse two arrays into a new array named `worldCities`
 */

/* let eurpeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo" , "Bangkok"]
let worldCities = eurpeanCities.concat(asianCities)
console.log(worldCities) */


/* 8.You have an array named `cityBucketList` containing "Kyoto", "Lodon" , "Cape Town" and "Vancouver"
Check if "London" is in the array and store the result in a variable named "isLodonInList" */

let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList)
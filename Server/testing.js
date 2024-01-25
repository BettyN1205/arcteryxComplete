const sizeChart = [
    {"size_id":1,"product_id":214,"size":"XXS","sleeve":78,"chest":84,"waist":69,"hip":83},
    {"size_id":2,"product_id":214,"size":"XS","sleeve":81,"chest":89,"waist":74,"hip":88},
    {"size_id":3,"product_id":214,"size":"S","sleeve":83,"chest":94,"waist":79,"hip":93},
    {"size_id":4,"product_id":214,"size":"M","sleeve":86,"chest":102,"waist":86,"hip":100},
    {"size_id":5,"product_id":214,"size":"L","sleeve":89,"chest":109,"waist":94,"hip":108},
    {"size_id":6,"product_id":214,"size":"XL","sleeve":91,"chest":119,"waist":104,"hip":118},
    {"size_id":7,"product_id":214,"size":"XXL","sleeve":94,"chest":129,"waist":114,"hip":128},
    {"size_id":8,"product_id":214,"size":"3XL","sleeve":96,"chest":139,"waist":124,"hip":138}
];

const userInputData = {
    sleeve: 86,
    chest: 102,
    waist: 86,
    hip: 110
};

const maxMeasurement = Math.max(userInputData.chest, userInputData.waist, userInputData.hip);

let targetArray;

if (maxMeasurement === userInputData.hip) {
    targetArray = sizeChart.map(item => item.hip);
} else if (maxMeasurement === userInputData.waist) {
    targetArray = sizeChart.map(item => item.waist);
} else if (maxMeasurement === userInputData.chest) {
    targetArray = sizeChart.map(item => item.chest);
} else {
    // Handle the case when maxMeasurement doesn't match any specific measurement in userInputData
    console.error("Invalid measurement type");
}

const closestSize = sizeChart.find(item => targetArray.includes(item.waist) && item.waist >= maxMeasurement);

const result = closestSize ? closestSize.size : "No matching size found";
console.log(result);

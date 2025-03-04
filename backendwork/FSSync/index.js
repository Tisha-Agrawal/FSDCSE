const {readData,writeData,appendData,datadelete} = require("./FileOperations")

writeData();
const rd=readData();
console.log(rd)
appendData();
readData();
// datadelete();

const fs = require('fs');

// fs.readFile('index.js', 'utf-8', (err, data) => {
//     console.log(err, data)
// })

const a = fs.readFileSync('index.js');

console.log(a.toString());

console.log('Finished');
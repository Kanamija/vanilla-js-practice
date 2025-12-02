const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line')

// fs.writeFile('./docs/blog1txt', 'Hello this is the greatest day', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2txt', 'Hello thank you for today', () => {
//     console.log('file was written');
// })
// if (!fs.existsSync('./assets')) {
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }

if (fs.existsSync('./docs/blog1.txt')) {
    fs.unlink('./docs/blog1.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
        })
}

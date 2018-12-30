const scrapeIt = require("scrape-it")
const websites = require('./config.js');
var fs = require('fs'); // 引入fs模块
let _scrapeIts;
if (websites&&websites.length) {
    _scrapeIts = websites.map((web) => {
    // Promise interface
    return scrapeIt(web.url, web.data)
    .then(({ data, response }) => {
        console.log(`Status Code: ${response.statusCode}`)
        console.log(data)
        return data;

    })
    .then((data) => {
        fs.writeFile(web.meta+'.json', JSON.stringify(data), function(err) {
            if (err) {
                throw err;
            }
        })
        
    }).catch((err) => {
        
    });
    })
}
// Promise interface
// scrapeIt("https://ionicabizau.net", {
//     title: ".header h1"
//   , desc: ".header h2"
//   , avatar: {
//         selector: ".header img"
//       , attr: "src"
//     }
// }).then(({ data, response }) => {
//     console.log(`Status Code: ${response.statusCode}`)
//     console.log(data)
// })
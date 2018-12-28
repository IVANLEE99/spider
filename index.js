const scrapeIt = require("scrape-it")
const websites = require('./config.js');
let _scrapeIts;
if (websites&&websites.length) {
    _scrapeIts = websites.map((web) => {
    // Promise interface
    return scrapeIt(web.url, web.data).then(({ data, response }) => {
        console.log(`Status Code: ${response.statusCode}`)
        console.log(data)
    })
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
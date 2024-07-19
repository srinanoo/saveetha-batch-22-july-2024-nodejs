// console.log("My First Node Project");
// function testFunc() {
//     console.log("Inside Function");
// }
// testFunc();

// const os = require('os');
// console.log(os.platform());
// console.log(os.totalmem());

// const fs = require('fs');
// fs.writeFileSync;
// fs.writeFile

// fs.appendFileSync
// fs.appendFile

// fs.unlinkSync
// fs.unlink

// CRUD
//     Create
//     Read
//     Update
//     Delete

// const http = require('http');
// http.createServer((req, res) => {
//     res.write("My First Node Project");
//     res.end();
// }).listen(4000, () => console.log("Server is running on port : 4000"));

// const trainees = require('./trainees');
// trainees.readAllTrainees();

const fs = require('fs');
console.log("Before...");
// Sync Way
    // try {
    //     fs.writeFileSync("./sample.txt", "Modified Code...");
    //     console.log("File has been updated");
    // } catch (err) {
    //     console.log(err);
    // }
// // Async Way
//     fs.writeFile("./sample1.txt", "New Code...", (err) => {
//         if(err) console.log(err);
//         else console.log("File has been created!");
//     })

// Sync Way
    // try {
    //     fs.appendFileSync("./sample1.txt", "New Content pushed... at the end....");
    //     console.log("File has been added with new content");
    // } catch (err) {
    //     console.log(err);
    // }
// Async Way
    // fs.appendFile("./sample.txt", "New Content pushed... at the end....", (err) => {
    //     if(err) console.log(err);
    //     else console.log("File has beed added with the new content");
    // });

// Sync Way
    // try {
    //     fs.unlinkSync("./sample.txt");
    //     console.log('File has been deleted');
    // } catch(err) {
    //     console.log(err.message);
    // }
// Async Way
    // fs.unlink("./sample1.txt", (err)=> {
    //     if(err) console.log(err.message)
    //     else console.log("Files has been deleted");
    // })

// Sync Way
    // try {
    //     let data = fs.readFileSync("./sample.txt", "utf8");
    //     console.log(data);
    // } catch (err) {
    //     console.log(err.message);
    // }
// Async Way
    // fs.readFile("./sample.txt", "utf8", (err, data) => {
    //     if(err) console.log(err.message)
    //     else console.log(data);
    // });
    // console.log(data);

// Sync Way
    try {
        let data = fs.readFileSync("./sample.txt", "utf8");
        data = "At the start this code added... " + data;
        console.log(data);

        fs.writeFileSync("./sample.txt", data);
    } catch (err) {
        console.log(err.message);
    }
console.log("After...");
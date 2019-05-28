const http = require('http')
 const port = 4000

http.createServer((request, responseg) =>{
    response.write('Welcome to this Server')
    response.end()
}).listen(port)

console.log(`Server is running at ${port}`)


const fs =require('fs')

const data = fs.readFileSync('mine.txt')

console.log(data.toString())

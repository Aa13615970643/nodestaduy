/*
   hellow node.js 
 */
const http  = require('http')
const hostname = '127.0.0.1'
const port = 3000
const serve = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('hellow node')
})
serve.listen(port,hostname,()=>{
   console.log('服务开始')
})

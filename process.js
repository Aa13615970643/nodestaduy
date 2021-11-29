/*
  如何结束进程 
  如何获取环境变量
 */
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('你好')
})
const serve = app.listen(3000, () => console.log('开始'))

/*
  这个程序永远不会结束。 
  如果调用 process.exit()，
  则任何当前等待中或运行中的请求都会被中止。
  这不太友好。
 */
//   process.exit()


/*
  "SIGTERM"正常终止程序
  "SIGKILL"相当于process.exit() 
 */
// 获取环境变量
//   process.env.NODE_ENV // "development"
process.on("SIGTERM", () => {
    serve.close(() => {
        console.log('我已经结束了')
    })
})
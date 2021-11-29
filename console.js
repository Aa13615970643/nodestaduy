/*
   代码输出到命令控制台
   就是很简单用console.log 打印
 */

//为输出着色包错误
// const chalk = require('chalk')
// console.log(chalk.yellow('你好'))
//创建进度条
const ProgressBar = require('progress')
const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)

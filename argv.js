/*
 从命令行接受参数 
 process 对象的argv 属性接受命令行穿过来的参数
 */
//1.可以迭代所有参数取到他的值
process.argv.forEach((val,index)=>{
  console.log(`参数过来了是：${index}:${val}`)
})
//2.可以建立一个数值排除前2个参数
const argv = process.argv.slice(2)
let a = argv[0]
console.log(a)

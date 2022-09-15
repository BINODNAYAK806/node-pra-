let name = 1

console.log(name)

// console.log(process)
// if(typeof name !== "string"){
//     console.error("it is not a number")
//     console.error("it is not a number")
//     process.exit()
    
// }

console.log(process.argv[4])



function sayHello(abc){

    console.log(abc ,"is a good boy")

}
sayHello(name)

const fs = require('fs')
const fileName = process.argv[2]
console.log("we will red file", fileName)

const content = fs.readFileSync(fileName,{
    encoding: 'utf-8'
})
console.log(content)


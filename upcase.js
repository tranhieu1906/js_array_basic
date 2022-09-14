let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let input = prompt("nhap vao")
let result = []
for (let i = 0 ; i< input.length;i++){
    if (UPPER.includes(input[i])){
        result.push(input[i].toLowerCase())
    }else if (LOWER.includes(input[i])){
        result.push(input[i].toUpperCase())
    }else{
        result.push(input[i])
    }
}
console.log(result.join(""))
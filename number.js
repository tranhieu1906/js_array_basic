let number = prompt("nhap so vao")
const result = [];
for (let i = 0 ; i < number.length ; i++){
    if (number[i-1]%2==0&&number[i]%2==0){
        result.push("-",number[i])
    }else {
        result.push(number[i])
    }
}
console.log(result.join(''));

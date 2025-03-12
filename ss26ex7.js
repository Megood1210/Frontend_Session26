let input = prompt("Nhập 10 số nguyên, cách nhau bằng dấu phẩy:");
let arr = input.split(",").map(Number); 
if (input.trim() === "") {
    console.log("Mảng không có dữ liệu");
} else if (arr.some(isNaN) ) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let result = arr.map(num => num ** 2).filter(num => num % 2 === 0);
    if(result.length > 0){
        console.log(result);;
    }else{
        console.log("Mảng không có phần tử nào");
    }
}

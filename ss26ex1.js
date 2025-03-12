let input = prompt("Nhập 10 số nguyên, cách nhau bằng dấu phẩy:");
let arr = input.split(",").map(Number); // Chuyển từng phần tử thành số
if (arr.some(isNaN)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    const bigNumbers = arr.filter(value => value > 10);
    
    if (bigNumbers.length > 0) {
        console.log(bigNumbers);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}



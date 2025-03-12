let input = prompt("Nhập 10 số nguyên, cách nhau bằng dấu phẩy:");
if (!input.trim()) {
    console.log("Mảng không có dữ liệu");
} else {
    let arr = input.split(",").map(Number);
    if (arr.some(isNaN)) {
        console.log("Dữ liệu không hợp lệ");
    } else {
        let maxNumber = Math.max(...arr);
        let indexes = [];
        arr.forEach((num, index) => {
            if (num === maxNumber) {
                indexes.push(index);
            }
        });
        console.log(`Số lớn nhất trong mảng là ${maxNumber} ở vị trí ${indexes.join(", ")}`);
    }
}

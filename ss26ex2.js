function filterLongStrings(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    const result = arr.filter(str => typeof str === "string" && str.length > 5);
    if (result.length === 0) {
        return "Mảng không có phần tử nào";
    } else {
        return result;
    }
}
console.log(filterLongStrings(["apple", "banana", "cat", "elephant", "dog"])); 
console.log(filterLongStrings([])); 
console.log(filterLongStrings("abc")); 

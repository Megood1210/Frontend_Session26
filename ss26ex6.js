function isValidDateFormat(date) {
    let parts = date.split("-"); 

    if (parts.length !== 3) return false; 

    let [year, month, day] = parts; 
    if (year.length === 4 &&  month.length === 2 &&  day.length === 2 &&  !isNaN(year) && !isNaN(month) && !isNaN(day) ) {
        return true;
    }
    return false;
}

function formatDates(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let formattedDates = arr.filter(date => isValidDateFormat(date)) .map(date => {
        let [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        });
        if(formattedDates.length > 0){
            return formattedDates;
        }else{
            console.log("Mảng không có phần tủ nào");
            
        }
}
console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"])); 
console.log(formatDates([])); 
console.log(formatDates("abc")); 


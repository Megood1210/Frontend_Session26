function filterLongStrings(emails) {
    if (!Array.isArray(emails)) {
        return "Dữ liệu không hợp lệ";
    }
    const result = emails.filter(email => typeof email === "string" && email.includes("@") && !email.includes(" "));
    if (result.length === 0) {
        return "Mảng không có phần tử nào";
    } else {
        return result;
    }
}
console.log(filterLongStrings(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"])); 
console.log(filterLongStrings([])); 
console.log(filterLongStrings("abc")); 
document.addEventListener("DOMContentLoaded", function () {
    const textA = document.getElementById("textA");
    const textB = document.getElementById("textB");
    const countButton = document.getElementById("countButton");
    const resultElement = document.getElementById("result");

    countButton.addEventListener("click", function () {
        const paragraphA = textA.value;
        const lineB = textB.value;

        // Sử dụng biểu thức chính quy để đếm số lần xuất hiện của B trong A
        const regex = new RegExp(lineB, "g");
        const count = (paragraphA.match(regex) || []).length;

        resultElement.textContent = `Số lần xuất hiện của '${lineB}' trong đoạn văn (A): ${count}`;
    });
});

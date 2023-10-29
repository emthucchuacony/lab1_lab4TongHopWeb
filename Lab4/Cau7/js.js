document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.getElementById("button-container");
    const resultElement = document.getElementById("result");
    const numbers = getRandomNumbers(1, 64);
    let currentNumber = 1;

    // Tạo button với số ngẫu nhiên
    numbers.forEach(function (number) {
        const button = document.createElement("button");
        button.className = "game-button";
        button.textContent = number;
        buttonContainer.appendChild(button);

        button.addEventListener("click", function () {
            const buttonNumber = parseInt(button.textContent, 10);

            if (buttonNumber === currentNumber) {
                button.style.display = "none";
                currentNumber++;

                if (currentNumber > 64) {
                    resultElement.textContent = "Chúc mừng! Bạn đã hoàn thành trò chơi!";
                }
            } else {
                resultElement.textContent = "Bạn đã nhấn sai. Hãy nhấn theo thứ tự từ nhỏ đến lớn.";
            }
        });
    });

    // Hàm tạo một danh sách số ngẫu nhiên trong khoảng từ start đến end
    function getRandomNumbers(start, end) {
        const numbers = [];

        for (let i = start; i <= end; i++) {
            numbers.push(i);
        }

        // Trộn ngẫu nhiên danh sách số
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        return numbers;
    }
});

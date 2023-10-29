document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("image");
    let rotationAngle = 0; // Góc xoay ban đầu

    function rotateImage() {
        // Tăng góc xoay lên 15 độ (xoay theo chiều kim đồng hồ)
        rotationAngle += 15;

        // Áp dụng góc xoay lên hình ảnh
        image.style.transform = `rotate(${rotationAngle}deg)`;

        // Gọi lại hàm sau 2 giây để tiếp tục xoay
        setTimeout(rotateImage, 2000); // Gọi lại hàm sau 2 giây
    }

    // Bắt đầu xoay sau khi trang đã tải xong
    setTimeout(rotateImage, 2000); // Gọi hàm xoay sau 2 giây
});

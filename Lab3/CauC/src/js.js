

function showError() {
    // Lấy giá trị từ trường "username"
    var username = document.querySelector(".user input").value;
    var pass = document.querySelector(".pass input").value;
    // Kiểm tra nếu trường "username" trống rỗng
    if (username === "") {
        alert('Vui lòng nhập tên người dùng hoặc email.');
    } else if (pass === "")  {
        alert("vui lòng nhập mật khẩu");
        // Thực hiện xử lý đăng nhập nếu thông tin hợp lệ
        // Đây là nơi để bạn đưa mã xử lý đăng nhập thực tế.

    }
    else {
        alert("đăng nhập thành công");
    };
}


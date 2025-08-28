/** Giải thích từng function
🔹 changeText()
function changeText() {
  document.getElementById("welcome").innerText = "Xin chào, mình là Tuan 🚀";
}


document.getElementById("welcome") → chọn thẻ có id="welcome" (ở đây là <h1>).

.innerText → thay đổi nội dung chữ hiển thị.
👉 Khi bấm nút Đổi chữ, chữ "Welcome!" sẽ đổi thành "Xin chào, mình là Tuan 🚀".

🔹 changeColor()
function changeColor() {
  let box = document.getElementById("colorBox");
  let colors = ["teal", "orange", "purple", "crimson", "gold", "blue", "green"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  box.style.background = randomColor;
}


colors → mảng chứa nhiều màu khác nhau.

Math.random() → random số thập phân (0 → 1).

Math.floor() → làm tròn xuống.

colors[Math.floor(Math.random() * colors.length)] → chọn ngẫu nhiên 1 màu từ mảng.

box.style.background = randomColor; → thay đổi màu nền của box.
👉 Mỗi lần bấm Đổi màu box, box sẽ đổi sang 1 màu ngẫu nhiên.

🔹 toggleBox()
function toggleBox() {
  let box = document.getElementById("colorBox");
  box.style.display = (box.style.display === "none") ? "block" : "none";
}


Kiểm tra nếu box đang ẩn (display: none) → hiện (block).

Nếu box đang hiện → ẩn.
👉 Bấm nút Ẩn/Hiện box nhiều lần thì box sẽ ẩn/hiện luân phiên.

🔹 resizeBox()
function resizeBox() {
  let box = document.getElementById("colorBox");
  if (box.style.width === "150px") {
    box.style.width = "250px";
    box.style.height = "250px";
  } else {
    box.style.width = "150px";
    box.style.height = "150px";
  }
}


Mặc định box có 150px.

Nếu box đang 150px → tăng lên 250px.

Nếu đã 250px → quay lại 150px.
👉 Nút Phóng to/Thu nhỏ box sẽ làm box to/nhỏ lại.

🔹 resetAll()
function resetAll() {
  document.getElementById("welcome").innerText = "Welcome!";
  let box = document.getElementById("colorBox");
  box.style.display = "block";
  box.style.background = "teal";
  box.style.width = "150px";
  box.style.height = "150px";
}


Đưa tất cả về trạng thái mặc định:

Chữ = "Welcome!".

Box = màu teal.

Box = 150x150.

Box hiển thị.
👉 Khi bấm Reset thì mọi thứ trở về ban đầu.

📌 Tips cho bạn khi học DOM:

Luôn nhớ: document.getElementById("...") để chọn phần tử.

.innerText, .style là thuộc tính thường dùng.

Kết hợp if/else để tạo logic tương tác.*/
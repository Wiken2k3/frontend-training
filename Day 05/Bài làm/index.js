// Tạo một mảng rỗng để lưu học sinh
let students = [];

// Hàm thêm học sinh vào mảng
function addStudent(name) {
  students.push(name); // push sẽ thêm phần tử vào cuối mảng
  console.log(`${name} đã được thêm vào danh sách.`);
}

// Hàm hiển thị toàn bộ danh sách
function showStudents() {
  console.log("Danh sách học sinh:");
  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
  }
}

// Hàm xóa học sinh theo tên
function removeStudent(name) {
  let index = students.indexOf(name); // tìm vị trí của name
  if (index !== -1) {
    students.splice(index, 1); // xóa 1 phần tử tại vị trí index
    console.log(`${name} đã bị xóa khỏi danh sách.`);
  } else {
    console.log(`${name} không có trong danh sách.`);
  }
}

// --- Thử chạy ---
addStudent("An");
addStudent("Bình");
addStudent("Chi");

showStudents();

removeStudent("Bình");

showStudents();

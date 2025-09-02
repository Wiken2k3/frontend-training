/**Tóm tắt bài học
1. useState – Quản lý trạng thái (state)

Dùng để lưu và cập nhật dữ liệu trong component (ví dụ: count).

Khi gọi setCount, component sẽ re-render với giá trị mới.

2. useEffect – Xử lý hiệu ứng phụ (side effects)

Dùng để gọi API, thao tác DOM, hoặc làm bất cứ việc gì ngoài việc render UI.

Nếu bạn truyền [] (mảng rỗng), effect chỉ chạy một lần sau khi component được render lần đầu.

📝 Giải thích bằng tiếng Anh – Sample Answer

In React, useState is a hook that lets me create state variables inside functional components. I can use it to store and update values like counters, inputs, or toggles.

useEffect is another important hook that lets me run side effects after the component renders. For example, I can fetch data from an API using useEffect. If I pass an empty dependency array ([]), the effect only runs once after the first render. */
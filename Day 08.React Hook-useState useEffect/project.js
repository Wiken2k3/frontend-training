/**Ý tưởng

Counter: Dùng useState để tăng/giảm số.

Fetch API: Dùng useEffect để gọi API và hiển thị dữ liệu (ví dụ tên user). */

import React, { useState, useEffect } from "react";

export default function App() {
  // 1. State cho Counter
  const [count, setCount] = useState(0);

  // 2. State cho User
  const [user, setUser] = useState(null);

  // 3. useEffect gọi API (chạy 1 lần sau render đầu tiên)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: 20 }}>
      <h1>Day 8 – useState & useEffect</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* User Data */}
      <div style={{ marginTop: 30 }}>
        <h2>Fetched User</h2>
        {user ? (
          <p>
            Name: <b>{user.name}</b> <br />
            Email: {user.email}
          </p>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    </div>
  );
}


/**Giải thích bằng tiếng Anh (bạn luyện viết & đọc nhé)

I used useState to store the counter value and update it when the user clicks the button.

I used useEffect to fetch user data from an API after the component mounted.

The counter updates immediately when I click, because updating state causes a re-render.

The effect only runs once because I passed an empty dependency array.

4. Bài tập thực hành

👉 Bạn thử viết lại bằng tiếng Anh mô tả code trên, ví dụ:
"This component has a counter and also fetches user data from an API. The counter uses useState, while the API call is managed by useEffect." */
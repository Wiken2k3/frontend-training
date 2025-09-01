/**Day 8: React Hooks – useState & useEffect
1. Từ vựng chuyên ngành
English	Vietnamese	Ví dụ câu
hook	hook (React)	React provides built-in hooks such as useState and useEffect.
state	trạng thái	The component’s state changes when the user clicks the button.
lifecycle	vòng đời	useEffect is used to handle component lifecycle events.
dependency array	mảng phụ thuộc	We add variables to the dependency array to control when the effect runs.
side effect	hiệu ứng phụ	Fetching data from an API is considered a side effect in React.
2. Câu mẫu chuyên ngành

I use useState to store and update component state.
(Tôi dùng useState để lưu trữ và cập nhật trạng thái của component.)

useEffect allows me to run side effects after rendering.
(useEffect cho phép tôi chạy các hiệu ứng phụ sau khi render.)

If the dependency array is empty, the effect only runs once after the first render.
(Nếu mảng phụ thuộc rỗng, effect chỉ chạy một lần sau khi render đầu tiên.)

Updating state will cause the component to re-render.
(Cập nhật state sẽ làm component re-render.)

3. Bài tập thực hành

Viết bằng tiếng Anh: giải thích 2 hook chính của React.
👉 Ví dụ trả lời:

"In React, useState is used to declare a state variable inside a functional component. It allows the component to store and update values dynamically. On the other hand, useEffect is used to handle side effects, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can be controlled with a dependency array."

4. Mini exercise

👉 Điền từ thích hợp:

use_____ allows you to manage state inside a functional component.

use_____ is often used to fetch data or handle side effects.

If you pass an empty dependency array, the effect runs only _____.

5. Tips học nhanh

Luôn nhớ:
🔹 useState = lưu và thay đổi dữ liệu (input, toggle, counter).
🔹 useEffect = chạy code sau khi render (fetch API, document.title, cleanup).

Khi học tiếng Anh, hãy thử viết comment code bằng tiếng Anh để luyện.

Mỗi ngày chọn 1 project nhỏ và mô tả bằng tiếng Anh:
Ví dụ: "I built a counter component using useState. The value increases when the user clicks the button." */
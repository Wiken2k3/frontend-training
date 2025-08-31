/**1) Flexbox – nắm nhanh trong 2 phút

Đặt trên container:

display: flex;

justify-content: ... (căn theo trục ngang: start | center | space-between …)

align-items: ... (căn theo trục dọc: start | center | stretch …)

gap: 16px; (khoảng cách giữa item)

flex-wrap: wrap; (tự xuống hàng)

Đặt trên item:

flex: grow shrink basis; (vd: flex: 1 1 240px;)

Nhớ: Flexbox tuyệt cho hàng/cột đơn, thanh header/nav, nhóm nút, card hàng ngang.

2) CSS Grid – chìa khóa responsive đơn giản

Trên container:

display: grid;

grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

gap: 24px;

Ưu điểm: Tự động chia cột 1–2–3… theo kích thước màn hình không cần media query.

Nhớ: Grid lý tưởng cho lưới card, gallery, bố cục 2–3 cột. */ 
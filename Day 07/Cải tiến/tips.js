/**Tips về Flexbox (phần bạn vừa dùng)

Flex-wrap luôn nhớ bật

display: flex;
flex-wrap: wrap;


→ Nếu quên flex-wrap, card sẽ kéo dài mãi 1 hàng → bể layout.

flex: 1 1 Xpx

1 (grow): cho phép giãn.

1 (shrink): cho phép co.

Xpx: chiều rộng tối thiểu.
👉 Luôn chọn flex: 1 1 250px; hoặc 300px để card tự xuống hàng khi nhỏ quá.

gap > margin

Dùng gap: 24px; trong flex/grid.

Đỡ phải tính margin trái phải, code gọn, responsive auto.

🎯 Tips về Card + UI

Aspect-ratio để ảnh không méo

.card__img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}


Hover effect nhẹ
Không nên lạm dụng animation → chỉ transform: translateY(-4px); và box-shadow là đủ hiện đại.

Badge/Pill

Badge luôn dùng border-radius: 999px; → auto ra hình pill.

Tránh dùng px cứng (border-radius: 20px) vì không scale đẹp.

🎯 Tips về Responsive

Clamp font-size

font-size: clamp(18px, 2vw, 24px);


→ chữ co giãn theo màn hình nhưng không bé/quá to.

Container max-width
Đừng để nội dung dính sát mép.

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}


Media query đơn giản
Chỉ thêm khi thật sự cần. Ví dụ:

@media (max-width: 480px) {
  .nav { flex-direction: column; gap: 8px; }
}

🎯 Tips để nhớ lâu

🔑 Quy luật:

Flexbox → chia hàng/cột (1D layout).

Grid → bảng nhiều ô (2D layout).

Card → luôn có 3 phần: image → body → actions.

Responsive → dùng flex: 1 1 Xpx; + gap là đã ổn 70%. */
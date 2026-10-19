# 20.10 · A little letter for you

Một website quà tặng tĩnh (HTML + CSS + JavaScript thuần), không cần build, chạy được trên GitHub Pages.

Trải nghiệm: lời mời → phong bì mở ra → lá thư → cuộn phim ảnh kỷ niệm → lời kết.

```
20-10-love-letter/
├── index.html      Cấu trúc (semantic HTML)
├── style.css       Giao diện, design system, chuyển động
├── script.js       CONFIG (nội dung cần sửa) + logic
├── README.md
└── assets/
    ├── photos/     Ảnh kỷ niệm (memory-01.webp ...)
    └── audio/      Nhạc nền (your-song.mp3)
```

## 1. Tải mã nguồn

Tải file ZIP rồi giải nén, hoặc `git clone` nếu bạn đã đưa lên GitHub. Giữ nguyên cấu trúc thư mục ở trên.

## 2. Chạy thử trên máy

Cách nhanh nhất: mở `index.html` bằng Chrome hoặc Safari.

Nên chạy bằng máy chủ nội bộ để giống GitHub Pages hơn (cần Python):

```bash
cd 20-10-love-letter
python3 -m http.server 8000
```

Rồi mở `http://localhost:8000`. Trên điện thoại cùng Wi‑Fi, mở `http://<IP-máy-tính>:8000`.

Mẹo khi chỉnh ảnh: mở `index.html#film` để nhảy thẳng tới cảnh cuộn phim, khỏi phải bấm qua từng bước.

## 3. Thay nội dung thư và tên

Mở `script.js`, chỉ sửa khối `CONFIG` ở đầu file (có chú thích `← ĐỔI`):

| Muốn đổi | Sửa ở |
|---|---|
| Tên bạn (cuối thư) | `senderName` |
| Cách gọi người nhận ("em", tên, biệt danh) | `recipientName` |
| Tiêu đề màn hình đầu | `title` |
| Các đoạn thư | `letterParagraphs` (mỗi đoạn một dòng trong `[ ]`, cách nhau bằng dấu phẩy) |
| Câu chữ nút, tiêu đề, lời kết | `texts` |

Lưu ý: nếu nội dung có dấu nháy kép `"`, hãy viết là `\"` hoặc dùng dấu “ ”.

## 4. Thêm và tối ưu ảnh

1. Đặt ảnh vào `assets/photos/`, ví dụ `memory-01.webp`.
2. Trong `CONFIG.memories`, mỗi ảnh là một khối `{ image, caption, alt }`. Copy khối để thêm, xóa khối để bớt.
3. Khi chưa có ảnh, website tự hiện khung **"Ảnh mẫu — thay bằng ảnh thật"**, không báo lỗi.

Tối ưu để tải nhanh trên điện thoại:

- Tỉ lệ **4:5 (dọc)**, ví dụ 800 × 1000 px. Ảnh khác tỉ lệ sẽ được cắt giữa khung, không bị méo.
- Dung lượng nên dưới ~150 KB mỗi ảnh. Định dạng `.webp` hoặc `.jpg`.
- Xóa thông tin vị trí (EXIF) của ảnh trước khi đưa lên mạng công khai.
- Công cụ: [squoosh.app](https://squoosh.app), hoặc `cwebp -q 80 -resize 800 1000 in.jpg -o memory-01.webp`.

## 5. Thêm nhạc nền

1. Đặt file vào `assets/audio/`, mặc định tên `your-song.mp3` (hoặc đổi `musicPath` trong `CONFIG`).
2. Chỉ dùng bài bạn có quyền sử dụng (nhạc tự làm, nhạc miễn phí bản quyền, hoặc được cấp phép). Không đưa nhạc có bản quyền lên mạng công khai nếu chưa được phép.
3. Nên dưới ~3 MB (MP3 128 kbps). Trang sẽ thử phát nhạc khi người nhận chạm nút bắt đầu; nút nhạc ở góc dưới bên phải vẫn dùng để bật/tắt thủ công.
4. Không muốn dùng nhạc: đặt `musicPath: ""`. Nếu thiếu file, website vẫn chạy và hiện thông báo nhẹ nhàng.

Một số trình duyệt, đặc biệt trên iOS, có thể chặn phát nhạc. Khi đó người nhận có thể chạm nút nhạc ở góc dưới bên phải để bật.

## 6. Tạo repository GitHub

1. Đăng nhập GitHub → **New repository**.
2. Đặt tên (ví dụ `20-10-love-letter`). Chọn **Public** nếu dùng GitHub Pages gói miễn phí.
3. Không cần tích chọn README/gitignore (đã có sẵn trong dự án).

> Địa chỉ trang sẽ công khai với bất kỳ ai có link. Đừng đưa thông tin quá riêng tư vào thư/ảnh. Trang đã có `noindex` nên công cụ tìm kiếm thường không lập chỉ mục, nhưng đó không phải là bảo mật.

## 7. Upload hoặc push mã nguồn

Cách không cần dòng lệnh: trong repository chọn **Add file → Upload files**, kéo toàn bộ nội dung thư mục dự án vào (cả thư mục `assets`), rồi **Commit changes**.

Cách dùng Git:

```bash
cd 20-10-love-letter
git init
git add .
git commit -m "Add 20/10 letter"
git branch -M main
git remote add origin https://github.com/<ten-ban>/<ten-repo>.git
git push -u origin main
```

Lưu ý: GitHub không lưu thư mục rỗng. Hai file `.gitkeep` trong `assets/` giúp giữ chúng.

## 8. Bật GitHub Pages

1. Vào **Settings → Pages**.
2. Mục **Build and deployment → Source**: chọn **Deploy from a branch**.
3. **Branch**: `main`, thư mục: **`/ (root)`** → **Save**.
4. Đợi 1–3 phút.

## 9. Kiểm tra URL và xử lý lỗi đường dẫn

Địa chỉ có dạng `https://<ten-ban>.github.io/<ten-repo>/`.

Mọi đường dẫn trong dự án đều là tương đối (`./style.css`, `./assets/...`) nên chạy được trong repository con. Nếu có lỗi:

- **Trang trắng / thiếu giao diện**: mở DevTools (F12) → tab Network, xem file nào bị 404. Kiểm tra `style.css`, `script.js` nằm cùng cấp `index.html`.
- **Ảnh không hiện (chỉ thấy "Ảnh mẫu")**: GitHub Pages phân biệt hoa/thường. `Memory-01.webp` khác `memory-01.webp`. Kiểm tra đúng tên và đuôi file trong `CONFIG.memories`.
- **Nhạc không phát**: kiểm tra tên file trong `assets/audio/` trùng `musicPath`.
- **Sửa xong nhưng trang cũ**: tải lại cứng (Ctrl/Cmd + Shift + R) hoặc đợi vài phút để GitHub xuất bản.

## 10. Kiểm tra trên iPhone thật

Nên làm trước khi gửi:

1. Mở link bằng **Safari** trên iPhone, chạy hết luồng: chạm → mở phong bì → mở thư → cuộn thư → gấp thư → xem cuộn phim → vuốt ảnh → đọc lại thư.
2. Xoay ngang và dọc; kiểm tra nút không bị Dynamic Island hay thanh Home che.
3. Bấm **Bật nhạc** / **Tắt nhạc** (nhớ tắt chế độ im lặng nếu cần).
4. Thử **Cài đặt → Trợ năng → Chuyển động → Giảm chuyển động**: cuộn phim sẽ không tự chạy, người nhận tự vuốt.
5. Dùng thêm Chrome trên điện thoại nếu có.

## Ghi chú kỹ thuật

- Font Playfair Display và DM Sans tải từ Google Fonts. Nếu mất mạng sẽ dùng font serif/sans của hệ thống. Muốn tự lưu font, tải file về `assets/` và thay thẻ `<link>` trong `index.html` bằng `@font-face`.
- Cuộn phim lặp liền mạch bằng cách nhân bản vừa đủ để phủ chiều rộng màn hình (thường 1–2 bản), tự dừng khi rê chuột, khi focus bàn phím, khi tab bị ẩn, hoặc khi bấm **Tạm dừng**.
- Thư dùng thẻ `<dialog>` gốc của trình duyệt: có sẵn khóa focus, phím Escape; bấm nền mờ để đóng.

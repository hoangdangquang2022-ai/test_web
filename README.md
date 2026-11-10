# Mộc Store — Demo website bán hàng

Website thương mại điện tử demo xây dựng bằng React 18 và Vite.

## Tính năng
- Giao diện responsive cho desktop và mobile
- Danh sách sản phẩm mẫu, lọc theo danh mục, tìm kiếm và sắp xếp giá
- Thêm sản phẩm vào giỏ, tăng/giảm số lượng, tính tổng tiền và phí giao hàng
- Form thông tin giao hàng và xác nhận đơn hàng demo
- Thông báo thao tác và form đăng ký nhận tin

## Chạy local
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
npm run preview
```

## Xuất bản trên GitHub Pages
Mỗi lần push lên nhánh `main`, GitHub Actions sẽ tự động build và triển khai website.
Sau khi workflow chạy thành công, website sẽ có tại:
https://hoangdangquang2022-ai.github.io/test_web/

Nếu đây là lần đầu bật Pages, vào **Settings → Pages** và chọn **Source: GitHub Actions**.

## Lưu ý
Đây là bản demo frontend: dữ liệu giỏ hàng chỉ tồn tại trong phiên trình duyệt; đặt hàng không gửi tới máy chủ, không thu tiền thật và chưa có quản trị, tài khoản hoặc cơ sở dữ liệu.

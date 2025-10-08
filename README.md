# 🌾CropWise Project 

**CropWise** là một ứng dụng web được xây dựng bằng **React + Vite**, nhằm mục đích **tối ưu hóa việc quản lý, theo dõi, chẩn đoán bệnh trên cây ngô theo khí hậu thổ những tại Việt Nam** thông qua giao diện hiện đại, dễ sử dụng và khả năng mở rộng linh hoạt.

---

## 1. Yêu cầu Cài đặt & Khởi động Dự án

### A. Yêu cầu Tiên quyết (Prerequisites)

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt:

- [Node.js](https://nodejs.org/) (khuyến nghị phiên bản **18+**)  
- [npm](https://www.npmjs.com/) (đi kèm với Node.js)  
- [Git](https://git-scm.com/)

---

### B. Khởi chạy Lần đầu

Thực hiện các bước sau trong Terminal:

```bash
# 1️⃣ Clone Repository
git clone https://github.com/ohhMyVenuss/Crop-Wise-Project.git

# 2️⃣ Di chuyển vào thư mục dự án
cd CropWise

# 3️⃣ Cài đặt các gói phụ thuộc
npm install

# 4️⃣ Khởi động máy chủ phát triển
npm run dev
```
---

## 2. Quy tắc Làm việc Nhóm (Git Flow)

Dự án tuân thủ **GitHub Flow** để đảm bảo quy trình làm việc mạch lạc, dễ theo dõi và tránh xung đột.

---

### A. Nhánh Chính (Main Branch)

- **Tên:** `main`  
- **Mục đích:** Chứa code ổn định, đã kiểm thử và sẵn sàng triển khai (**Production-ready**).  
- **Quy tắc:** *Không commit trực tiếp vào nhánh `main`.*

---

### B. Quy trình Làm việc Chuẩn

#### 1️⃣ Bắt đầu Công việc

Luôn cập nhật nhánh `main` trước khi tạo nhánh mới để tránh xung đột:

```bash
git checkout main
git pull origin main
```
Tạo một nhánh mới (tên nhánh mô tả rõ công việc):

```bash
git checkout -b feature/ten-tinh-nang-cua-ban
# Ví dụ: git checkout -b fix/auth-form-validation
```

#### 2️⃣ Commit & Đồng bộ (Push)

Sau khi hoàn thành công việc hoặc muốn sao lưu tiến trình:

```bash
# Thêm file thay đổi
git add .

# Commit theo quy ước (xem Mục 3)
git commit -m "feat: Them form dang nhap cho nguoi dung"

# Đẩy nhánh lên GitHub
git push origin feature/ten-tinh-nang-cua-ban
```
#### 3️⃣ Tạo Pull Request (PR)

#### Truy cập GitHub → Tạo Pull Request (PR) từ nhánh tính năng sang main.

#### Bắt buộc Review: Một thành viên khác trong nhóm phải xem xét code.

#### Merge: Chỉ được hợp nhất sau khi:

#### Đã được phê duyệt (✅ Approved).

#### Đã giải quyết xong mọi xung đột (nếu có).
## 3. Cấu trúc thư mục chính

```bash
CropWise/
├── node_modules/       # Thư viện cài đặt (bị .gitignore bỏ qua)
├── public/             # Tệp tĩnh (favicon, manifest, hình ảnh dùng chung)
├── src/
│   ├── assets/         # Hình ảnh, fonts, icons
│   ├── components/     # Các component UI có thể tái sử dụng
│   ├── pages/          # Các trang chính (Dashboard, Login, CropDetail, ...)
│   ├── App.jsx         # Component gốc của ứng dụng
│   └── main.jsx        # Điểm khởi đầu của ứng dụng React
├── .gitignore          # Danh sách file/thư mục không được đẩy lên GitHub
├── package.json        # Danh sách dependencies & scripts
└── README.md           # Tài liệu hướng dẫn (file hiện tại)

```

## Yêu cầu hệ thống

-   [Node.js](https://nodejs.org/en/) (phiên bản 18 trở lên)
-   [npm](https://www.npmjs.com/) (phiên bản mới nhất)

### Installation

1. Clone repository:

```
git clone https://github.com/LeDuy0806/quiz-app-nextjs.git
```

2. Move to quiz-app-nextjs:

```
cd quiz-app-nextjs
```

3. Install package:

```
npm install
```

4. Run project:

```
npm run dev
```

## Lưu ý cho anh em collaborators

1. Clone dự án tạo branch và push code
   Clone repository:

```
git clone https://github.com/LeDuy0806/quiz-app-nextjs.git
```

Lúc này anh em đang ở brand main của local cũng như remote và anh em cần tạo 1 branch mới, bằng cách:

```
git checkout -b [Name]Dev
```

[Name]Dev: sẽ là tên nhánh của anh em ví dụ DuyDev,QuocDev,...

Sau khi tạo xong nhánh thì nên kiểm tra lại nhánh của mình bằng lệnh trên thì có thể kiểm tra lại bằng lệnh:

```
git branch
```

nếu nó hiện ra theo dạng như sau thì ok rồi:

```
* [name]Dev
  main
```

---

Để push code lên branch mới sau khi add và tạo commit thì dùng lệnh:

```
git push -u origin [name]Dev
```

**_Lưu ý là sau origin là tên branch mới tạo_**. Push xong có thể tự merge hoặc kêu ae trong team merge

**_Lưu ý 2 là cách trên là sử dụng để tạo branch chưa có trên remote từ lần push tiếp theo thì chỉ cần kiểm tra bằng <u>git branch</u> xem đúng tên branch so với trên local chưa xong rồi add commit và <u>git push</u> thôi không cần vế sau -u_**:

```
git branch (để kiểm tra branch)

git push (để push code sau khi add và commit)
```

2. Pull code mới về:

-   Dùng lệnh sau để pull code mới nhất từ main:

```
git pull origin main
```

**_Một số lưu ý khi pull code:_**

-   Nên pull code sau khi đang push code mới lên và code đó đã được merge vào main để tránh conflict với local.
-   Nên kiểm tra xem code của mình có bị cũ so với main trên remote không? Và pull code về trước khi làm để tránh bị conflict về sau.

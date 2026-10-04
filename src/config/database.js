// Dev A code file cấu hình để kết nối Database.
// LỖI CHẾT NGƯỜI: Dev A gõ thẳng mật khẩu thật của công ty vào code!

export const dbConfig = {
    host: "prod-cluster.mongodb.net",
    user: "admin_super",
    // Gitleaks sẽ "đánh hơi" ra dòng chữ "password" hoặc chuỗi bí mật này
    password: "SuperSecretPassword123!@#", 
    apiKey: "AKIAIOSFODNN7EXAMPLE" // Giả lập lộ AWS Key
};
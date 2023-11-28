<template>
    <footer class="main-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Thông tin</h3>
            <ul>
              <li><a href="/about">Về chúng tôi</a></li>
              <li><a href="/contact">Liên hệ</a></li>
              <li><a href="/privacy">Chính sách bảo mật</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Hỗ trợ</h3>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping">Vận chuyển</a></li>
              <li><a href="/returns">Chính sách đổi trả</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Theo dõi chúng tôi</h3>
            <div class="social-icons">
              <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
              <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  /* Thiết kế cho footer với màu vàng làm chủ đạo */
  .main-footer {
    background-color: #ffcc00; /* Màu vàng */
    color: #333; /* Màu chữ đen */
    padding: 20px 0;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .footer-section {
    flex: 1;
    margin-right: 20px;
  }
  
  h3 {
    font-size: 1.2em;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #333; /* Màu chữ đen */
  }
  
  .social-icons {
    display: flex;
  }
  
  .icon {
    font-size: 1.5em;
    margin-right: 10px;
    color: #333; /* Màu icon chữ đen */
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
  
    .footer-section {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  </style>
  
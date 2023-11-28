<template>
  <header class="main-header">
    <div class="container">
      <img src="../../../public/Logo.png" alt="Your Logo" class="logo"  />
      <nav>
        <ul>
          <li><a href="/home">Trang chủ</a></li>
          <li><a href="/products">Sản phẩm</a></li>
          <li><a href="/about">Về chúng tôi</a></li>
          <li><a href="/contact">Liên hệ</a></li>
        </ul>
      </nav>
      <div class="user-actions">
        <a href="/login" class="login-link">Đăng nhập</a>
        <a href="/signup" class="signup-link">Đăng ký</a>
        <div class="cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="item-count">3</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Thiết kế cho header với màu vàng làm chủ đạo */
/* CSS cho thẻ <a> đăng ký và đăng nhập */
  a.login-link,
a.signup-link {
  display: inline-block;
  padding: 10px 20px;
  margin: 1px;
  background-color: #3498db; /* Màu nền xanh da trời */
  color: #fff; /* Màu chữ trắng */
  text-decoration: none;
  border-radius: 5px; /* Góc bo tròn */
  transition: background-color 0.3s ease-in-out; /* Hiệu ứng màu nền khi hover */
}

a.login-link:hover,
a.signup-link:hover {
  background-color: #2980b9; /* Màu nền xanh đậm khi hover */
}
.main-header {
  background-color: #ffcc00; /* Màu vàng */
  color: #333; /* Màu chữ đen */
  padding: 10px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 70px;
  font-size: 1.5em;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #333; /* Màu chữ đen */
}

.user-actions {
  display: flex;
  align-items: center;
}

.cart {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.item-count {
  background-color: #333; /* Màu đen */
  color: #fff; /* Màu chữ trắng */
  padding: 5px;
  border-radius: 50%;
  margin-left: 5px;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    margin-top: 10px;
  }

  .user-actions {
    margin-top: 10px;
  }
}
</style>

<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" name="username" required>
  
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Xử lý đăng nhập ở đây
        console.log('Login:', this.username, this.password);
        // Thêm logic xử lý đăng nhập, chẳng hạn chuyển hướng trang
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    background-color: #fff; /* Màu nền trắng */
    padding: 20px;
    border-radius: 8px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    text-align: center;
  }
  
  h2 {
    color: #ffcc00; /* Màu vàng cho tiêu đề */
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
  
  label {
    margin-top: 10px;
  }
  
  input {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #ffcc00; /* Màu vàng cho nút đăng nhập */
    color: #fff; /* Màu chữ trắng */
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #ffa500; /* Màu cam khi hover */
  }
  </style>
  
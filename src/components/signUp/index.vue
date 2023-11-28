<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup" class="signup-form">
      <div class="form-column">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input v-model="firstName" type="text" id="firstName" name="firstName" required>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input v-model="lastName" type="text" id="lastName" name="lastName" required>
        </div>

        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input v-model="dob" type="date" id="dob" name="dob" required>
        </div>

        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input v-model="phoneNumber" type="tel" id="phoneNumber" name="phoneNumber" required>
        </div>
      </div>

      <div class="form-column">
        <div class="form-group">
          <label for="gender">Gender</label>
          <select v-model="gender" id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" name="password" required>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" required>
        </div>

        <div class="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      dob: '',
      phoneNumber: '',
      gender: 'male',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    signup() {
      // Xử lý đăng ký ở đây
      console.log('Sign Up:', this.firstName, this.lastName, this.dob, this.phoneNumber, this.gender, this.password, this.confirmPassword);
      // Thêm logic xử lý đăng ký, chẳng hạn chuyển hướng trang
    },
  },
};
</script>

<style scoped>
.signup-container {
  background-color: #fff; /* Màu nền trắng */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

h2 {
  color: #ffcc00; /* Màu vàng cho tiêu đề */
}

.signup-form {
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
}

.form-column {
  width: 48%;
}

.form-group {
  margin-top: 15px;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #ffcc00; /* Màu vàng cho nút đăng ký */
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

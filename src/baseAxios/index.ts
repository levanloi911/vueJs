// axios.js
import axios from 'axios';
import router from './../router/index'
const axiosInstance = axios.create({
  baseURL: 'https://63dce23bdf83d549ce95a6aa.mockapi.io/api/v2',
});

// Intercept request và response
axiosInstance.interceptors.request.use(
  (config) => {
    // Thực hiện xử lý trước khi gửi request
    return config;
  },
  (error) => {
    // Xử lý lỗi khi gửi request
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Thực hiện xử lý khi nhận được response
    return response;
  },
  (error) => {
    // Xử lý lỗi khi nhận được response
    const status = error.response ? error.response.status : null;

    switch (status) {
      case 400:
        console.error('400 Bad Request');
        // Xử lý lỗi 400 (Bad Request)
        break;
      case 401:
        console.error('401 Unauthorized');
        // Xử lý lỗi 401 (Unauthorized)
        // Ví dụ: Chuyển hướng người dùng đến trang đăng nhập
        break;
      case 403:
        console.error('403 Forbidden');
        // Xử lý lỗi 403 (Forbidden)
        // Ví dụ: Chuyển hướng người dùng đến trang cấm
        break;
      case 404:
        console.error('404 Not Found');
        router.push('/404')

        // Xử lý lỗi 404 (Not Found)
        // Ví dụ: Chuyển hướng người dùng đến trang không tìm thấy
        break;
      case 500:
        console.error('500 Internal Server Error');
        // Xử lý lỗi 500 (Internal Server Error)
        // Ví dụ: Hiển thị thông báo lỗi
        // this.$toasted.error('Internal Server Error');
        break;
      default:
        console.error(`Unhandled error: ${status}`);
        // Xử lý các lỗi khác không được xử lý đặc biệt
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

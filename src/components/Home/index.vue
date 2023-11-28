<script>
import axios from 'axios';
export default {
  components:{
    Header,
    Footer
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // Đường dẫn tới tệp JSON giả mạo
    const jsonFilePath = '/mock.json';

    // Sử dụng axios để đọc dữ liệu từ tệp JSON
    axios.get(jsonFilePath)
      .then(response => {
        // Gán dữ liệu từ response vào biến products
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
  methods: {
    addToCart(product) {
      // Thêm logic xử lý thêm sản phẩm vào giỏ hàng ở đây
      console.log('Added to cart:', product);
    },
  },
};
</script>

<template>
    <div class="main-body">
    <section class="featured-products">
      <div class="container">
        <h2>Sản phẩm Nổi bật</h2>
        <!-- Hiển thị danh sách sản phẩm nổi bật -->
        <!-- Ví dụ: -->
        <div v-for="product in products" :key="product.id" class="product">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <span class="price">{{ product.price }}</span>
          <button class="add-to-cart" @click="addToCart(product)">Thêm vào giỏ hàng</button>
        </div>
        <!-- Các sản phẩm khác tương tự -->
      </div>
    </section>

    <section class="latest-news">
      <div class="container">
        <h2>Tin Tức Mới Nhất</h2>
        <!-- Hiển thị danh sách tin tức mới nhất -->
        <!-- Ví dụ: -->
        <div class="news-item">
          <h3>Tiêu đề Tin Tức 1</h3>
          <p>Nội dung tin tức 1...</p>
        </div>
        <!-- Các tin tức khác tương tự -->
      </div>
    </section>
  </div>
</template>


<style scoped>
/* Thiết kế cho body với màu vàng làm chủ đạo */
.main-body {
  background-color: #fff; /* Màu nền trắng */
  color: #333; /* Màu chữ đen */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.featured-products, .latest-news {
  margin-bottom: 40px;
}

h2 {
  color: #ffcc00; /* Màu vàng */
}

.product, .news-item {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
}

.price {
  font-weight: bold;
  color: #ffcc00; /* Màu vàng */
}

.add-to-cart {
  background-color: #ffcc00; /* Màu vàng */
  color: #333; /* Màu chữ đen */
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
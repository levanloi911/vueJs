
<template>
  <form v-on:submit.prevent="addItem">
    <h1>Food!</h1>
    <input  type="text" v-model="message" >
    <p>{{ message }}</p>
    <FoodChilldrent a-name="1" b-name="2"/>
    <button type="submit">click</button>
  </form>
</template> 

<script>
import FoodChilldrent from './foodChilldrent.vue';

export default {
    data() {
        return {
            message: "Hello, Vue!",
        };
    },
    methods:{
      addItem(){
          console.log(this.message)
      }
    },
    watch:{
      message(i){
          console.log(i)
      }},
    components: { FoodChilldrent }
};
</script>

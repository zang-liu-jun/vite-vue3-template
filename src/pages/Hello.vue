<template>
  <div class="box">
    <div>
      <div class="title">Hello页面</div>
      <div>
        <button @click="getInHome">跳转到Home页面</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function getInHome() {
  router.push({
    name: "home",
  });
}
</script>

<style scoped lang="scss">
.box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 30px;
  font-weight: bold;
  color: cornflowerblue;
}
</style>

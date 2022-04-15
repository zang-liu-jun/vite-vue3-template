<template>
  <div class="box">
    <div>
      <div class="title">Home页面</div>
      <div>
        <button @click="getInHello">跳转到Hello页面</button>
      </div>
      <div>
        <span>计数：{{ userStore.count }}</span>
        <button @click="userStore.add">+1</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "../store";

const router = useRouter();
const userStore = useUserStore();

function getInHello() {
  router.push({
    name: "hello",
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

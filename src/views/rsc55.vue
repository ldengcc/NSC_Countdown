<template>
  <div class="relative flex items-center justify-center min-h-screen text-white h-screen antialiased bg-cover bg-center" style="background-image: url('https://worldskillstw.wdasec.gov.tw/uploads/banners/20241225145123.jpg');">
    <!-- 半透明黑板 -->
    <div class="absolute inset-0 bg-black opacity-50 backdrop-blur-2xl"></div>
    <!-- 倒數計時內容 -->
    <div class="relative z-10 text-center p-4 rounded-lg">
      <h1 class="text-2xl lg:text-5xl font-moto mb-6">第55屆全國技能競賽分區賽</h1>
      <div class="mx-auto lg:mx-0 w-5/5 lg:w-5/5 border-b-5 border-white opacity-75"></div>
      <div class=" text-4xl lg:text-[128px] pt-5 font-moto flex justify-center space-x-7 lg:space-x-20">
        <span :key="days" class="fade"> {{ formatTime(days) }} </span> 
        <span :key="hours" class="fade"> {{ formatTime(hours) }} </span> 
        <span :key="minutes" class="fade"> {{ formatTime(minutes) }} </span> 
        <span :key="seconds"> {{ formatTime(seconds) }} </span> 
      </div>
      <div class="text-1xl lg:text-2xl pt-5 font-thin flex justify-center space-x-6 lg:space-x-43">
        <span :key="days">DAYS</span> 
        <span :key="hours">HOURS</span> 
        <span :key="minutes">MINUTES</span> 
        <span :key="seconds">SECONDS</span> 
      </div>
    </div>
  </div>
</template>

<style>
.fade {
  display: inline-block;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 設定倒數目標時間
const targetDate = new Date("2025-03-26T00:00:00").getTime();

// 定義時間狀態
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let interval = null;

// 格式化時間（補零）
const formatTime = (num) => String(num).padStart(2, '0');

// 更新倒數時間
const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
};

// 設定倒數計時器
onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
  document.title = "RSC55-Countdown";
});

// 組件卸載時清除計時器
onUnmounted(() => {
  clearInterval(interval);
});
</script>

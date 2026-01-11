<template>
  <div class="nav-wrapper">
    <nav class="daohang">
      <div class="haohangrong-qi">
        <!-- 左侧logo/名字 -->
        <div class="haohangname">
          <router-link to="/" class="name-lian-jie">
            <span class="name">CYANOVO</span>
          </router-link>
        </div>
        
        <!-- 移动端：语言切换按钮放在汉堡按钮左边 -->
        <div class="mobile-right">
          <button class="language-btn mobile-btn" @click="toggleLanguage">
            <img src="../assets/znen.png">
          </button>
          
          <!-- 汉堡菜单按钮（小窗口显示） -->
          <button 
            class="hanbao-btn" 
            @click="toggleMenu"
            :class="{ 'active': menuOpen }"
          >
            <span class="hanbao-line"></span>
            <span class="hanbao-line"></span>
            <span class="hanbao-line"></span>
          </button>
        </div>
        
        <!-- 导航链接区域 -->
        <div class="haohanglian-jie" :class="{ 'show': menuOpen }">
          <router-link to="/" class="dao-hang-lian-jie" exact-active-class="ji-huo" @click="closeMenu">
            {{ language.isEnglish ? 'HOME' : '首页' }}
          </router-link>
          <router-link to="/about" class="dao-hang-lian-jie" active-class="ji-huo" @click="closeMenu">
            {{ language.isEnglish ? 'ABOUT' : '关于' }}
          </router-link>
          <router-link to="/works" class="dao-hang-lian-jie" active-class="ji-huo" @click="closeMenu">
            {{ language.isEnglish ? 'WORKS' : '作品' }}
          </router-link>
          <router-link to="/skills" class="dao-hang-lian-jie" active-class="ji-huo" @click="closeMenu">
            {{ language.isEnglish ? 'SKILLS' : '技能' }}
          </router-link>
          <router-link to="/contact" class="dao-hang-lian-jie" active-class="ji-huo" @click="closeMenu">
            {{ language.isEnglish ? 'CONTACT' : '联系' }}
          </router-link>
          
          <!-- 桌面端：语言切换按钮放在导航链接区域 -->
          <button class="language-btn desktop-btn" @click="toggleLanguage">
            <img src="../assets/znen.png">
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLanguageStore } from '../tool/language'  // 注意：根据实际路径调整

const menuOpen = ref(false)
const languageStore = useLanguageStore()
const { language, toggleLanguage: globalToggleLanguage } = languageStore

// 切换菜单
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// 切换语言
const toggleLanguage = () => {
  globalToggleLanguage()
  
  // 如果是移动端且菜单打开，切换语言后关闭菜单
  if (window.innerWidth <= 768 && menuOpen.value) {
    menuOpen.value = false
  }
}

// 监听窗口大小变化，在大窗口时自动关闭菜单
const checkWindowSize = () => {
  if (window.innerWidth > 768) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', checkWindowSize)
})
</script>

<style scoped>
/* 添加导航栏占位容器 */
.nav-wrapper {
  position: relative;
  height: 60px;
}

.daohang {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 0;
  margin: 0;
  height: 60px;
}

.haohangrong-qi {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 60px;
  position: relative;
}

.haohangname .name-lian-jie {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.name {
  transition: all 0.3s ease;
}

.name:hover {
  opacity: 0.9;
}

/* 移动端右侧区域 */
.mobile-right {
  display: none;
}

/* 汉堡菜单按钮 */
.hanbao-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.hanbao-line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: rgb(0, 0, 0);
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* 汉堡菜单动画 */
.hanbao-btn.active .hanbao-line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hanbao-btn.active .hanbao-line:nth-child(2) {
  opacity: 0;
}

.hanbao-btn.active .hanbao-line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* 导航链接区域 - 大屏幕时靠右 */
.haohanglian-jie {
  display: flex;
  gap: 30px;
  align-items: center;
}

.dao-hang-lian-jie {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
  font-weight: 500;
}

/* 语言切换图片按钮样式 - 透明版本 */
.language-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.language-btn:hover {
  opacity: 1;
}

.language-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* 桌面端按钮 - 默认显示 */
.desktop-btn {
  display: flex;
}

/* 移动端按钮 - 默认隐藏 */
.mobile-btn {
  display: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 隐藏桌面端语言按钮 */
  .desktop-btn {
    display: none !important;
  }
  
  /* 显示移动端右侧区域 */
  .mobile-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  /* 显示移动端语言按钮 */
  .mobile-btn {
    display: flex;
  }
  
  /* 汉堡按钮在小屏幕显示 */
  .hanbao-btn {
    display: flex;
  }
  
  .language-btn {
    width: 30px;
    height: 30px;
  }
  
  .haohanglian-jie {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 15px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  }
  
  .haohanglian-jie.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .dao-hang-lian-jie {
    width: 100%;
    text-align: center;
    padding: 12px 0;
    font-size: 1rem;
  }
}
</style>
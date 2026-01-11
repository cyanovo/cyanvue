<template>
  <div class="common-layout">
    <el-container style="height: 100%;">
      <!-- 左侧边栏 -->
      <el-aside width="15%" class="adide1 aside-column">
        Aside
      </el-aside>
      
      <!-- 主内容区 -->
      <el-main class="main">
        <span class="txt1">Hi,I'm</span>
        <span class="txt1">CYANOVO</span>
        <span class="txt2">Full Stack Developer</span>
        <span class="txt3">Welcome to my personal website, where I will share various knowledge from my learning phase and apply them in projects.</span>
        <div style="height: 5%;"></div>
        <button class="custom-btn">
    <span class="btn-text">Contact Me</span>
    <i class="el-icon-arrow-right btn-icon"></i>
  </button>
      </el-main>
      
      <!-- 右侧边栏 -->
      <el-aside width="40%" class="adide2 aside-column">
        Aside
      </el-aside>
    </el-container>
  </div>
</template>

<style scoped>
/* 关键修改：确保所有父元素都有高度 */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

.txt1 {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.2;
  width: 100%; /* 确保占满宽度 */
  text-align: left; /* 确保文本左对齐 */
}

.txt2 {
  font-size: 1.5rem; /* 稍微增大一点 */
  font-weight: 600;
  line-height: 1.5;
  width: 100%; /* 确保占满宽度 */
  text-align: left; /* 确保文本左对齐 */
  margin-top: 10px;
  margin-bottom: 20px;
}

.txt3 {
  font-size: 1rem;
  line-height: 1.6;
  width: 100%; /* 确保占满宽度 */
  text-align: left; /* 确保文本左对齐 */
  margin-bottom: 10px;
}

.common-layout {
  height: calc(100vh - 80px);
  width: 100%;
}

/* 确保 el-container 占满父容器 */
.el-container {
  height: 100% !important;
}

.el-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%; /* 确保占满可用宽度 */
}
.custom-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #4a6cf7; /* 背景色 */
  color: #ffffff; /* 文字颜色 */
  border: none;
  border-radius: 10px; /* 圆角大小 */
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-btn:hover {
  background-color: #3a5ce5; /* 悬停时的背景色 */
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn-text {
  margin-right: 8px;
}

.btn-icon {
  font-size: 1.1rem;
}
/* 添加一个包装器来更好地控制文本对齐 */
.main {
  width: 100%;
}

/* 确保每个文本元素都是块级元素且左对齐 */
.main > span {
  display: block;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

/* 默认情况下，侧边栏正常显示 */
.aside-column {
  display: block;
  height: 100%;
}

/* 响应式设计：在中等屏幕下只显示一个侧边栏 */
@media (max-width: 992px) {
  /* 隐藏右侧边栏 */
  .adide1 {
    display: none;
  }
  
  /* 调整侧边栏宽度 */
  .adide2 {
    width: 40% !important;
  }
}

/* 响应式设计：在小屏幕下隐藏所有侧边栏 */
@media (max-width: 768px) {
  /* 隐藏所有侧边栏 */
  .aside-column {
    display: none;
  }
  
  /* 让主内容区占据全部宽度 */
  .el-main {
    width: 100%;
    padding: 0 20px; /* 添加一些内边距避免文字贴边 */
  }
  
  /* 调整容器布局 */
  .el-container {
    flex-direction: column;
  }
  
  /* 移动端调整字体大小 */
  .txt1 {
    font-size: 2.5rem !important;
  }
  
  .txt2 {
    font-size: 1.2rem !important;
  }
}
</style>
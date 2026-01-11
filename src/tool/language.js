// src/tool/language.js
import { reactive, readonly } from 'vue'

// 创建全局响应式状态
const state = reactive({
  isEnglish: true
})

// 从本地存储初始化
const savedLang = localStorage.getItem('navLanguage')
if (savedLang) {
  state.isEnglish = savedLang === 'en'
}

// 切换语言函数
export const toggleLanguage = () => {
  state.isEnglish = !state.isEnglish
  localStorage.setItem('navLanguage', state.isEnglish ? 'en' : 'zh')
}

// 设置语言函数
export const setLanguage = (lang) => {
  state.isEnglish = lang === 'en'
  localStorage.setItem('navLanguage', lang)
}

// 创建只读的language对象并导出
export const language = readonly(state)

// 同时导出state（如果有些地方需要可写的状态）
export { state }

// 保持原有的useLanguageStore函数（为了你的导航代码不修改）
export const useLanguageStore = () => {
  return {
    language: readonly(state), // 只读状态
    toggleLanguage,
    setLanguage
  }
}
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ImageLightbox from './ImageLightbox.vue'

import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'nav-bar-title-after': () => h('span', { class: 'site-title-tip' }, '非官方，为站主自身学习镜像加速而搭建'),
    'layout-bottom': () => h(ImageLightbox),
  }),
}

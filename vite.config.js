import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "views": path.resolve(__dirname, "src/views"),
      "assets": path.resolve(__dirname, "src/assets"),
      "components": path.resolve(__dirname, "src/components"),
      "utils": path.resolve(__dirname, "src/utils")
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/css/base.less')}";`
      }
    }
  }
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      viteCompression({
        algorithm: 'gzip',
        threshold: 10240,
        verbose: false,
        deleteOriginFile: true
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 2233,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_SERVER_URL,
          changeOrigin: true
        },
        '/feed': {
          target: env.VITE_SERVER_URL + '/rss.xml',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/feed/, '')
        },
        '/images': {
          target: env.VITE_SERVER_URL,
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})

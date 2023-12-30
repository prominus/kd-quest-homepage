import { fileURLToPath } from "url";
import { UserConfig, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  // @ts-ignore
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    server: {
      port: 8080
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@docs': fileURLToPath(new URL('./docs', import.meta.url)),
        '@scss': fileURLToPath(new URL('./src/scss', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url))
      }
    }
  }
});

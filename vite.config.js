import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), eslintPlugin()],
  resolve: {
    alias: {
      'assets': resolve(__dirname, 'public/assets/'),
      'styles': resolve(__dirname, 'src/styles/'),
      'components': resolve(__dirname, 'src/components/'),
      'pages': resolve(__dirname, 'src/pages/'),
      'actions': resolve(__dirname, 'src/actions/'),
    }
  }
});

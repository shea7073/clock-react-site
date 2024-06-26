import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/setAlarm': 'http://seans-alarm.local',
      '/getAlarms': 'http://seans-alarm.local',
      '/deleteAlarm': 'http://seans-alarm.local',
      '/toggleAlarm': 'http://seans-alarm.local',
      }}


})

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'sampleapp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    hostname: 'localhost:8080'
  }
};

export default config;

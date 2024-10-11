import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hush1one.vibesearch',
  appName: 'vibesearch',
  webDir: 'out',
  server:{
    "androidScheme": "https"
  }
};

export default config;
